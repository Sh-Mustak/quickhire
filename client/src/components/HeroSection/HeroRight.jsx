import HeroImage from "../../assets/HeroImage.svg";
export default function HeroRight() {
  return (
    <div className="hidden lg:block relative">
      <img
        alt="Professional Worker"
        className="rounded-3xl "
        src={HeroImage}


      />
    </div>
  );
}
