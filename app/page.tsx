import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="h-[680px]">
      <Solutions></Solutions>
      </div>
    </main>
    
  );
}
