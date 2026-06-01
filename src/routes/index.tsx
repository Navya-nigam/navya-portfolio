import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navya Nigam — Data Science & ML Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Navya Nigam — Computer Science undergraduate, Data Science enthusiast and Machine Learning practitioner. Projects in Deep Learning, Computer Vision, and Analytics.",
      },
      { property: "og:title", content: "Navya Nigam — Data Science & ML Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science undergrad building with Python, Machine Learning, and Deep Learning. Research at IIT Kanpur.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
