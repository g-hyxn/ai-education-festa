import { ApplySection } from "@/components/apply-section";
import { AudienceTracks } from "@/components/audience-tracks";
import { Hero } from "@/components/hero";
import { Schedule } from "@/components/schedule";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AudienceTracks />
        <Schedule />
        <ApplySection />
      </main>
      <SiteFooter />
    </>
  );
}
