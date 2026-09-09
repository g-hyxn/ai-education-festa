import { ApplySection } from "@/components/apply-section";
import { AudienceTracks } from "@/components/audience-tracks";
import { EventInfo } from "@/components/event-info";
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
        <EventInfo />
        <AudienceTracks />
        <Schedule />
        <ApplySection />
      </main>
      <SiteFooter />
    </>
  );
}
