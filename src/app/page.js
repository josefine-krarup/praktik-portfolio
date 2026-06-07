"use client";

import Hero from "../components/Hero";
import Image from "next/image";
import Headings from "@/components/Headings";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Keywords from "@/components/Keywords";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />

      <Banner />

      <Headings title="Projekter" variant="left" background="blue" />
      <h2 className="text-center font-semibold lg:font-bold text-3xl lg:text-4xl mb-12 lg:mb-18">Udvalgte projekter</h2>
      <Projects variant="left" href="https://gajol.vercel.app" image="/assets/nightclub.png" title="Night Club - Eksamensprojekt" subtitle="(3. semester)" description="Frontend-udvikling af et event- og bookingwebsite bygget i React/Next.js med fokus på API-integration, interaktive UI-komponenter og moderne brugeroplevelser." />

      <Projects variant="right" href="https://frontend-design-opgave.netlify.app/" image="/assets/askekspert.png" title="AskExperts - Astro Design Implementation" subtitle="(3. semester)" description="Implementering af et Figma-design i Astro med fokus på semantisk HTML, moderne CSS og responsivt layout uden CSS-frameworks." />

      <Projects variant="left" href="https://beachbike.netlify.app/spil" image="/assets/beachbike.png" title="Interaktivt browser spil - Animation & JavaScript" subtitle="(1. semester)" description="Udvikling af et interaktivt klik-baseret spil med point, liv og timer. Projektet inkluderer animationer, game mechanics og dokumentationssite med design- og procesarbejde." />

      <Keywords />
      <Headings title="Om mig" variant="left" background="blue" />
      <section className="flex flex-col md:grid md:grid-cols-2 mx-auto max-w-[1100px] px-8 lg:px-0 items-center">
        <div className="flex flex-col gap-5 lg:text-lg md:order-2 lg:mb-25">
          <h2 className="font-semibold lg:font-bold text-3xl lg:text-4xl">Lidt om mig</h2>

          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Jeg er multimediedesignerstuderende på 3. semester på EK. Jeg har en stor interesse for at bygge digitale løsninger, hvor kode og design går hånd i hånd, og jeg har derfor valgt frontend som mit valgfag.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            Mit primære fokus er frontend-udvikling og brugeroplevelser, hvor jeg arbejder med at skabe intuitive, responsive og visuelt stærke webapplikationer.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            Jeg har erfaring med HTML, CSS, JavaScript, Astro og React samt design og prototyping i Figma. Som udvikler motiveres jeg især af at omsætte idéer og designs til funktionelle og interaktive løsninger.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}>
            Jeg søger i øjeblikket en praktikplads, hvor jeg kan udvikle mine kompetencer yderligere og få praktisk erfaring med udvikling af digitale produkter i et professionelt miljø.
          </motion.p>
        </div>

        <div className="md:order-1 lg:-mb-11">
          <Image src="/assets/selfie.png" alt="Et selfie af mig" width={400} height={600} className="object-cover mx-auto w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px]" />
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
}
