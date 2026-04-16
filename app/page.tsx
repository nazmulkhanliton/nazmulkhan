import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ background: "linear-gradient(180deg, transparent 0%, rgba(108,99,255,0.04) 50%, transparent 100%)" }}>
          <Projects />
        </div>
        <Research />
        <div style={{ background: "linear-gradient(180deg, transparent 0%, rgba(108,99,255,0.03) 50%, transparent 100%)" }}>
          <Awards />
        </div>
        <Contact />
      </main>
    </>
  );
}
