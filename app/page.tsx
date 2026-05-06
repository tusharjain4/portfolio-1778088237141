'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About"; // Renamed from Journey as per content
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  return (
    <>
      <Navbar name={portfolioData.name} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolioData.name}
            role={portfolioData.role}
            tagline={portfolioData.tagline}
          />
          <Projects projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <About
            about={portfolioData.about}
            currentRole={portfolioData.currentRole}
            highlights={portfolioData.highlights}
          />
          <Contact email={portfolioData.contact.email} />
        </div>
      </main>
      <Footer name={portfolioData.name} />
    </>
  );
}