import Navbar from "@/components/Navbar";
import CelestialSky from "@/components/CelestialSky";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Launchpad from "@/components/Launchpad";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-500 overflow-x-clip">
      {/* Fixed Celestial Sky Component (Day/Night sun, rays, clouds, moon, stars) */}
      <CelestialSky />

      {/* Sticky Navigation Bar with ThemeToggle */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative z-10">
        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* The Journey Section */}
        <Journey />

        {/* The Launchpad (Projects & Experiments) */}
        <Launchpad />

        {/* Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
