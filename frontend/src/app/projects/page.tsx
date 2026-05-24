import { ResearchCard } from "@/components/projects/research_card";
import { SoftwareCard } from "@/components/projects/software_card";

const research_projects = [
  {
    title: "Research Project One",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat sit amet justo luctus interdum.",
    advisors: ["Advisor One", "Advisor Two"],
    data_availability: "available" as const,
    paper_link: "/papers/research-project-one.pdf",
  },
  {
    title: "Research Project Two",
    abstract:
      "Praesent at sapien sed mi cursus pulvinar. Curabitur mattis augue vel faucibus faucibus.",
    advisors: ["Advisor Three"],
    data_availability: "on_request" as const,
  },
];

const software_projects = [
  {
    title: "Software Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nibh sed volutpat fermentum.",
    website_link: "https://example.com",
    repo_link: "https://github.com/julienberman",
  },
  {
    title: "Software Project Two",
    description:
      "Sed non turpis euismod, dictum mi in, consequat lacus. Integer vitae erat sit amet justo luctus interdum.",
    repo_link: "https://github.com/julienberman",
  },
];

export default function Projects() {
  return (
    <main className="space-y-14 py-8">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Selected work
        </h1>
        <p className="text-lg leading-8">
          Placeholder research and software projects. These will be replaced
          with finalized descriptions, papers, links, and repositories.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Research</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {research_projects.map((project) => (
            <ResearchCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Software</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {software_projects.map((project) => (
            <SoftwareCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
