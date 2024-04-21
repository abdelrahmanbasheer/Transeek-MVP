import Advert from "@/components/Advert";
import CarouselFinal from "@/components/CarouselFinal";
import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar/Navbar";
import Solutions from "@/components/Solutions/Solutions";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import SecondHero from "@/components/hero/SecondHero";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="h-[680px]">
      <Solutions></Solutions>
      </section>
      <section className="h-[720px] bg-filter-image bg-cover pt-[220px]">
      <Filter></Filter>
      </section>
      <section className="mt-20">
      <div className="h-[1025px] bg-filter-second-image bg-no-repeat bg-[length:100%_496px]">
      <SecondHero></SecondHero>
      </div>
      <div className="mx-auto">
        <Advert></Advert>
      </div>
      <CarouselFinal></CarouselFinal>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </main>
    
  );
}
