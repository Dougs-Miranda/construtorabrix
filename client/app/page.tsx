import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/widgets/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Sustainability } from "@/components/sections/Sustainability";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <ProjectsGrid />
        <Sustainability />
        <Social />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
