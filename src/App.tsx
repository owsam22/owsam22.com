import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { MARQUEE_SERVICES, MARQUEE_VALUES } from "./config/site";


export default function App() {
  return (
    <div className="grain relative min-h-screen bg-paper text-ink">
      <Nav />

      <main>
        <Hero />

        {/* dark ticker under hero — slightly tilted for editorial energy */}
        <div className="relative -mx-2 -rotate-1">
          <Marquee items={MARQUEE_SERVICES} />
        </div>

        <Services />

        {/* light ticker between sections */}
        <Marquee items={MARQUEE_VALUES} dark={false} slow reverse />

        <Work />
        <Testimonial />
        <Process />
        <WhyMe />

        {/* quiet divider */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="border-t-2 border-dashed border-ink/15" />
        </div>

        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
