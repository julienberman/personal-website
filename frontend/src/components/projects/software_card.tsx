import { GithubLogo, GlobeSimple } from "@phosphor-icons/react/dist/ssr";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SoftwareCardProps = {
  title: string;
  description: string;
  website_link?: string;
  repo_link?: string;
};

export function SoftwareCard({
  title,
  description,
  website_link,
  repo_link,
}: SoftwareCardProps) {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6">
        <p>{description}</p>
      </CardContent>
      {website_link || repo_link ? (
        <CardFooter className="gap-2">
          {website_link ? (
            <Button asChild size="sm">
              <a href={website_link} rel="noreferrer" target="_blank">
                <GlobeSimple className="size-4" weight="regular" />
                Website
              </a>
            </Button>
          ) : null}
          {repo_link ? (
            <Button asChild size="sm">
              <a href={repo_link} rel="noreferrer" target="_blank">
                <GithubLogo className="size-4" weight="regular" />
                Repository
              </a>
            </Button>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}
