import { ResearchCard } from "@/components/projects/research_card";
import { SoftwareCard } from "@/components/projects/software_card";

const research_projects = [
  {
    title: "The Market for Information",
    abstract:
      "How does the availability of trustworthy news affect the production of online misinformation? Using a dataset of 2.7 billion Twitter posts and a panel of 9,833 local newspapers, I show that reducing exposure to trustworthy local journalism significantly increases the share of Twitter discourse that contains misinformation. I use text embeddings computed by a large language model to train supervised classifiers that predict whether tweets about four topic areas --- vaccines, climate change, immigration, and U.S. election results --- contain misinformation. In the two years after a newspaper changes its publication frequency, the share of vaccine-related tweets containing misinformation increases by 2.3 percentage points (15 percent of the pre-treatment mean) and the share of immigration-related tweets containing misinformation increases by 3.8 percentage points (8 percent of the pre-treatment mean). These effects are more pronounced for larger changes in coverage (e.g. the closure of a daily newspaper) than for smaller changes in coverage (e.g. a newspaper transitioning from publishing four days per week to publishing three days per week). Although Twitter users in Republican counties produce more misinformation than users in Democratic counties, treatment effects in Democratic counties are approximately twice the size of treatment effects in Republican counties for both vaccine-related misinformation and immigration-related misinformation.",
    description: "Advised by Prof. Jesse Shapiro. Data available upon request.",
    paper_link: "/research/information_market.pdf",
    repo_link: "https://github.com/julienberman/information-market",
  },
];

const software_projects = [
  {
    title: "BiteShare",
    description:
      "Split the cost of a night out. Upload receipts and select which friends contributed to each item. Automatically send Venmo requests for reimbursement.",
    website_link: "https://biteshare.com",
    repo_link: "https://github.com/julienberman",
  },
];

export default function Projects() {
  return (
    <main className="space-y-14 py-8">
      <header className="max-w-5xl space-y-3">
        <p className="text-lg leading-8">
          Here are various projects I&apos;ve worked on, including research
          papers, software projects, and popular writing.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Research</h2>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {research_projects.map((project) => (
            <ResearchCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Software</h2>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {software_projects.map((project) => (
            <SoftwareCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
