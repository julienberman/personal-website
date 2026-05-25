"use client";

import { Code, FileText } from "@phosphor-icons/react";
import { useState } from "react";

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
  description: string;
  paper_link: string;
  repo_link: string;
};

export function ResearchCard({
  title,
  abstract,
  description,
  paper_link,
  repo_link,
}: ResearchCardProps) {
  const [is_expanded, set_is_expanded] = useState(false);

  return (
    <Card
      className="h-full min-h-96 cursor-pointer border border-border transition duration-200 hover:-translate-y-1 hover:shadow-lg"
      onClick={() => set_is_expanded((current) => !current)}
    >
      <CardHeader>
        <CardTitle className="text-center font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 text-sm leading-6">
        <div className="space-y-2">
          <p
            className={
              is_expanded
                ? "text-left"
                : "line-clamp-6 text-left md:line-clamp-7"
            }
          >
            <span className="font-bold">Abstract: </span>
            {abstract}
          </p>
          {!is_expanded ? (
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              See More
            </p>
          ) : null}
        </div>
        <p className="text-left text-sm italic text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-3">
        <Button asChild size="sm">
          <a
            href={paper_link}
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            target="_blank"
          >
            <FileText className="size-4" weight="regular" />
            Paper
          </a>
        </Button>
        <Button asChild size="sm">
          <a
            href={repo_link}
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            target="_blank"
          >
            <Code className="size-4" weight="regular" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
