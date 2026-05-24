import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ResearchCardProps = {
  title: string;
  abstract: string;
  advisors: string[];
  data_availability: "on_request" | "available";
  paper_link?: string;
};

const data_availability_labels = {
  available: "Data available",
  on_request: "Data available on request",
};

export function ResearchCard({
  title,
  abstract,
  advisors,
  data_availability,
  paper_link,
}: ResearchCardProps) {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-6">
        <p>{abstract}</p>
        <div className="space-y-1 text-xs uppercase tracking-[0.18em]">
          <p>Advisors: {advisors.join(", ")}</p>
          <p>{data_availability_labels[data_availability]}</p>
        </div>
      </CardContent>
      {paper_link ? (
        <CardFooter>
          <Button asChild size="sm">
            <a href={paper_link} rel="noreferrer" target="_blank">
              <DownloadSimple className="size-4" weight="regular" />
              Paper
            </a>
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
