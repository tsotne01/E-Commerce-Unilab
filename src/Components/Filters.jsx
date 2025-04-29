import filtersIcon from "../assets/Icons/filters-icon.svg";
import filterArrowRight from "../assets/Icons/filter-arrow-right.svg";

const Filters = () => {
  return (
    <div className="py-5 px-6 rounded-[20px] border-1 border-[#0000001A] max-w-lg">
      <div className="filters">
        <div className="flex justify-between mb-6 pb-6 border-b-1 border-[#0000001A]">
          <h2 className="satoshi text-xl font-bold">Filters</h2>
          <button type="button">
            <img src={filtersIcon} alt="filters icon" />
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-5 text-[#00000099] text-base mb-6 pb-6 border-b-1 border-[#0000001A]">
            <li className="flex justify-between">
              <span className="material-icons">T-shirts</span>
              <img src={filterArrowRight} alt="" />
            </li>
            <li className="flex justify-between">
              <span className="material-icons">Shorts</span>
              <img src={filterArrowRight} alt="" />
            </li>
            <li className="flex justify-between">
              <span className="material-icons">Shirts</span>
              <img src={filterArrowRight} alt="" />
            </li>
            <li className="flex justify-between">
              <span className="material-icons">Hoodie</span>
              <img src={filterArrowRight} alt="" />
            </li>
          </ul>
        </div>
        <div className="filter-item mb-6 pb-6 border-b-1 border-[#0000001A]">
          <label htmlFor="price">Price:</label>
          <input type="range" id="price" min="0" max="1000" step="10" />
        </div>
        <div className="filter-item flex flex-col">
          <label htmlFor="rating">Colors:</label>
          <div className="flex gap-4 max-w-[247px] flex-wrap w-full mb-6 pb-6 border-b-1 border-[#0000001A]">
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
            <label
              htmlFor="color-bg-slate"
              className="bg-[#00C12B] border-[#00000033] border-2 rounded-full inline-block w-9 min-h-9"
            >
              <input type="checkbox" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
