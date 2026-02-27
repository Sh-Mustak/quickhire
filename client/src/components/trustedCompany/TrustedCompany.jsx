import Vodafone from "../../assets/vodafone.svg";
import Intel from "../../assets/intel-3.svg";
import Tesla from "../../assets/tesla.svg";
import AMD from "../../assets/amd.svg";
import Talkit from "../../assets/talkit.svg";
export default function TrustedCompany() {
  return (
    <section className="py-12 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-400 text-sm font-medium text-4xl mb-8">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale">
          <img
            alt="Vodafone"
            className="h-12 object-contain"
            src={Vodafone}
          />
          <img
            alt="Intel"
            className="h-10 object-contain"
            src={Intel}
          />
          <img
            alt="Tesla"
            className="h-7 object-contain"
            src={Tesla}
          />
          <img
            alt="AMD"
            className="h-8 object-contain"
            src={AMD}
          />
          <img
            alt="Talkit"
            className="h-9 object-contain"
            src={Talkit}
          />
        </div>
      </div>
    </section>
  );
}
