import { Code, GlobeSimple } from "@phosphor-icons/react/dist/ssr";

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
    <Card className="h-full min-h-96 border border-border transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-center font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 text-sm leading-6">
        <p className="text-left">{description}</p>
      </CardContent>
      {website_link || repo_link ? (
        <CardFooter className="grid grid-cols-2 gap-3">
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
                <Code className="size-4" weight="regular" />
                Code
              </a>
            </Button>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}
