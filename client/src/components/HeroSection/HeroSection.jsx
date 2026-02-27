import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <HeroLeft />
        {/* <!-- Hero Image (Desktop Only Illustration implied by Layout) --> */}
       <HeroRight />
      </div>
    </section>
  );
}
