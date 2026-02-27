import HeroBgImage from "../../assets/heroBg.png";
import HeroImage from "../../assets/HeroImage.svg";
import Rectangle from "../../assets/Rectangle.svg";
export default function HeroRight() {
  return (
    <div className="hidden lg:block relative">
      <img
        src={HeroBgImage}
        alt="Hero Background"
        className="absolute -top-10 w-full right-30 object-cover "
      />

      <div>
        <img
          alt="Professional Worker"
          className="rounded-3xl z-1 w-full relative"
          src={HeroImage}
        />
      </div>
      <div>
        <img
          src={Rectangle}
          alt="Rectangle"
          className="absolute -bottom-10 right-0 z-2"
        />
      </div>
    </div>
  );
}
