import RightArrow from "../../assets/RightArrowIcon.svg"
import LatestJobCard from "./LatestJobCard";
export default function LatestJob() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50/50 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-primary">jobs open</span>
          </h2>
          <a
            className="text-primary font-semibold flex items-center gap-2"
            href="#"
          >
            Show all jobs{" "}
            <img src={RightArrow} alt="" />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {/* <!-- Job List Item 1 --> */}
          <LatestJobCard/>
          {/* <!-- Job List Item 2 --> */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
              <img
                alt="Netlify"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTBRKu8gp4wDlt8FFnvZd4vXzHxhYNdqqCjcLj0yYoYioQlZYBE74dS6FB8lqtzzt7KRbs0tbvga6cjaoZRz_cl9O-XUu1w59ZYNBRSbquwVkKo5EHE8ot7_BmXxJJeXy19XpXt1MO4-FVL5gMo0z9be7V-P03mE1NgoWm43NlWhhpMHaXuLY_kLMTa-0wBXI2rv31amWBUtkTUkyr9Ist-SoyMhAXY09zge5B0V68PRdjSeQB26pTFuq8iQt5BvTlGEBDDQhtJDU"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Social Media Assistant</h3>
              <p className="text-gray-400 text-sm">Netlify • Paris, France</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-0.5 bg-cyan-50 text-cyan-600 text-[10px] font-bold rounded-full">
                  Full-Time
                </span>
                <span className="px-3 py-0.5 border border-yellow-200 text-yellow-600 text-[10px] font-bold rounded-full">
                  Marketing
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Job List Item 3 --> */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <img
                alt="Dropbox"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntuOZj8TRmBIFRI1PVkw0tO9sgdFMnxQWFQF18lktcwLQ9Uspmz9oOZmI_aPwqYApJKsRiZj_CWys9YoZfKb_gzfY1qfq7jgfY2tSjPcxz2Km4KNbt2U9KaOxEUPyK-fOOtlCSViSZneUxJ6xhOsjTkUQJB2YX0DSsa65U5F2Qa1j2aCLwa1JO7mrxuMPGL6yO3SZjt0PerG8e5b9sfvHvFBJ0-0NfMeHWvczqWJU0e2QeX0b4DsNWtOv8aUOXALs4wYrPyF633Ea"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Brand Designer</h3>
              <p className="text-gray-400 text-sm">
                Dropbox • San Francisco, USA
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-full">
                  Full-Time
                </span>
                <span className="px-3 py-0.5 border border-indigo-200 text-indigo-600 text-[10px] font-bold rounded-full">
                  Design
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Job List Item 4 --> */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
              <img
                alt="Maze"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoN4IsrIjSm5pv36UrPcZ3UAwCFhvdluwZtnGMFXWftcnQxSzUN-rn1AgrMVkZmPxPtm7TsSinaIpIOWvKj3arNQzOwbjNEDD9qMJ6dXaL3_CvQzsZPq75zyNRqwgbavbHbAJuPlkOlbfSO3sI3dHA6AjYXBthw3DAHIHjUV1NRq9eBJTpKXrE_JDucF8pBvT7FScWoHNrLfuQXA-FxPdBMP5b_7iH8R_EmX4O-cMV_4_xaz8DEHVn1zzFgjQwOaiPNZ5K90sIhLsk"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Brand Designer</h3>
              <p className="text-gray-400 text-sm">Maze • San Francisco, USA</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-0.5 bg-cyan-50 text-cyan-600 text-[10px] font-bold rounded-full">
                  Full-Time
                </span>
                <span className="px-3 py-0.5 border border-yellow-200 text-yellow-600 text-[10px] font-bold rounded-full">
                  Marketing
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Job List Item 5 --> */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <img
                alt="Terraform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1nNYKc4K2WZhS_sT_zt2qQ-eAvjdKwXhGl7L8REtEK5e-yeFDSFe06XAEvJTIO2sSGVp1zURqJvfDbc27TpSgaxUPOL9WjaSD9mkTeY5krkJfdTgYcjpS8vrlSgg3AmO6BG_pwdpMFlG7cN7K69lwQOKRaFuQ3r0PQej5ZZRSPGYZx2jyYlfC5-ECbmXQ02sthRA8kFYyKovvqQPOlPUk1pe90jw6WY9YQu3h-xXLTXKz7kF6spIYoda0oIzkNBpoxrg8alc6_NQt"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Interactive Developer</h3>
              <p className="text-gray-400 text-sm">
                Terraform • Hamburg, Germany
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-0.5 bg-yellow-50 text-yellow-600 text-[10px] font-bold rounded-full">
                  Full-Time
                </span>
                <span className="px-3 py-0.5 border border-indigo-200 text-indigo-600 text-[10px] font-bold rounded-full">
                  Developer
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Job List Item 6 --> */}
          <div className="bg-white p-6 rounded-2xl flex items-center gap-6 card-shadow border border-transparent hover:border-primary/20 transition-all">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <img
                alt="Packer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrljkMz67OAEbtbBYXXZu7ZZ7ElWYQo2Nqglpz7D6C4u0iBqfVSfSehi5-avPYWto30UZG-uEvp48ubpIwIk-4I1wjO0sa_N-gPK1CUf_MlkH3Skf_Ere4-WlVo3A1-azMfybxlMLoWPrNFqgPtFM46W6ad7kaTmPaYbQuhtkktvdcaTUfeohc5j5gE8cGQjneIkbEO-fWKPGR9_h5WuwOyHtREo3lHfJ9sepaF9DdGynP0ocQqrTET5Ep7F3ni1NcAWuHVn7Mw66"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">HR Manager</h3>
              <p className="text-gray-400 text-sm">
                Packer • Lucern, Switzerland
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-0.5 bg-cyan-50 text-cyan-600 text-[10px] font-bold rounded-full">
                  Full-Time
                </span>
                <span className="px-3 py-0.5 border border-yellow-200 text-yellow-600 text-[10px] font-bold rounded-full">
                  Marketing
                </span>
                <span className="px-3 py-0.5 border border-indigo-200 text-indigo-600 text-[10px] font-bold rounded-full">
                  Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
