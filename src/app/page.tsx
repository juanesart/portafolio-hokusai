import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Trabajos from "@/components/sections/Trabajos";
import SobreMi from "@/components/sections/SobreMi";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Trabajos />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
