import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <About />
      {/* <Testimonials /> */}
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
