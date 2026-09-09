import { ApplySection } from "@/components/apply-section";
import { AudienceTracks } from "@/components/audience-tracks";
import { Hero } from "@/components/hero";
import { QuickLinks } from "@/components/quick-links";
import { Schedule } from "@/components/schedule";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QuickLinks />
        <AudienceTracks />
        <Schedule />
        <ApplySection />
      </main>
      <SiteFooter />
    </>
  );
}
