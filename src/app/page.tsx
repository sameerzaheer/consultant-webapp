import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
