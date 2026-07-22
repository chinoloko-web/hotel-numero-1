import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
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
        <div className="relative bg-gradient-to-b from-background via-background to-secondary/20">
          <Introduction />
        </div>
        <div className="relative bg-secondary/20">
          <Amenities />
        </div>
        <div className="relative bg-background">
          <Testimonials />
        </div>
        <div className="relative bg-gradient-to-b from-secondary/20 via-background to-background">
          <Location />
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
