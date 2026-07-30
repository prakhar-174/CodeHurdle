import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { Stats } from '../components/sections/Stats';
import { Features } from '../components/sections/Features';
import { MockInterview } from '../components/sections/MockInterview';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Loader } from '../components/ui/Loader';

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-canvas dark:bg-canvas-dark w-full overflow-x-hidden">
        <Hero />
        <TrustBar />
        <Stats />
        <Features />
        <MockInterview />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
