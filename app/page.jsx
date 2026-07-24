import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { GithubGraph } from "@/components/github-graph";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GithubGraph />
      <Contact />
    </>
  );
}
