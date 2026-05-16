import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col pt-16">
      <Hero />
      <Features />
    </main>
  );
}
