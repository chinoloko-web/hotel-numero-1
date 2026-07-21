import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Rooms />
        <Amenities />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
