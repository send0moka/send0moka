import type { ReactElement } from "react";
import { About } from "@/components/sections/About";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { DevStatsSnapshot } from "@/components/sections/DevStatsSnapshot";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Hero } from "@/components/sections/Hero";
import { LifeLogPreview } from "@/components/sections/LifeLogPreview";
import { UsesStack } from "@/components/sections/UsesStack";
import { getWakatimeStats } from "@/lib/wakatime";

export default async function Home(): Promise<ReactElement> {
  const stats = await getWakatimeStats();

  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Certificates />
      <DevStatsSnapshot stats={stats} />
      <UsesStack />
      <GalleryPreview />
      <LifeLogPreview />
      <Contact />
    </>
  );
}
