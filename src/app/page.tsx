import Footer from "@/components/Footer";
import BookSection from "@/components/BookSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
