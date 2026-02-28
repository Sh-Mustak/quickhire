export default function SectionHeader(){
    return (
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-5xl font-bold">
            Explore by <span className="text-blue">category</span>
          </h2>
          <a
            className="text-primary font-semibold flex items-center gap-1"
            href="#"
          >
            Show all jobs{" "}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </a>
        </div>
    );
}