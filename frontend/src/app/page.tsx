import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

import { PhotoCard } from "@/components/photos/photo_card";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy_button";

const email = "julien.d.berman@gmail.com";

const social_links = [
  {
    href: "https://www.linkedin.com/in/julien-berman-53767b293/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "https://github.com/julienberman",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://x.com/julien_berman",
    label: "Twitter",
    icon: XLogo,
  },
];

export default function Home() {
  return (
    <main className="grid min-h-[calc(100vh-129px)] gap-10 md:grid-cols-[1fr_2fr]">
      <section className="flex flex-col items-center gap-5 md:border-r md:border-border md:pr-10">
        <div className="w-full max-w-xs">
          <PhotoCard />
        </div>

        <div className="flex items-center justify-center gap-2 text-lg leading-8">
          <span>{email}</span>
          <CopyButton aria_label="Copy email address" text={email} />
        </div>

        <div className="flex w-full max-w-xs justify-center gap-2">
          {social_links.map((link) => {
            const Icon = link.icon;

            return (
              <Button
                asChild
                key={link.label}
                size="icon"
                title={link.label}
                variant="ghost"
              >
                <a
                  aria-label={link.label}
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="size-5" weight="regular" />
                </a>
              </Button>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-6 md:pl-4">
        <div className="space-y-3">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            About
          </h1>
        </div>

        <div className="max-w-3xl space-y-5 text-lg leading-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae erat sit amet justo luctus interdum. Donec sagittis, nibh sed
            volutpat fermentum, massa lorem suscipit neque, non gravida sapien
            arcu vitae lectus.
          </p>
          <p>
            Praesent at sapien sed mi cursus pulvinar. Curabitur mattis, augue
            vel faucibus faucibus, justo sem facilisis risus, vitae placerat
            lectus ipsum sed erat. Sed non turpis euismod, dictum mi in,
            consequat lacus.
          </p>
        </div>
      </section>
    </main>
  );
}
