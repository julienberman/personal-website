"use client";

import { Check, CopySimple } from "@phosphor-icons/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  text: string;
  aria_label?: string;
};

export function CopyButton({
  text,
  aria_label = "Copy text",
}: CopyButtonProps) {
  const [copied, set_copied] = useState(false);

  async function handle_copy() {
    await navigator.clipboard.writeText(text);
    set_copied(true);
    window.setTimeout(() => set_copied(false), 1500);
  }

  const Icon = copied ? Check : CopySimple;

  return (
    <Button
      aria-label={aria_label}
      disabled={copied}
      onClick={handle_copy}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      <Icon className="size-4" weight="regular" />
    </Button>
  );
}
