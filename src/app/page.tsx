import { HeroSection } from "./components/sections/hero-section";

export default function Home() {
  return (
    // <div className="flex-0 p-0 m-0 border"></div>
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 pb-10 gap-16 sm:p-20">
      <HeroSection />
    </div>
  );
}
