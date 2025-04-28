import starImage from "../../assets/Images/Star.svg";
import verifiedIcon from "../../assets/Icons/Verified-icon.svg";

const Testimonial = ({
  id = 1,
  rating = 5,
  author = "Sarah M.",
  content = `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
}) => {
  return (
    <div className="w-80 md:w-[400px] px-7 py-8 max-w-[400px] min-w-[320px] border-1 border-[#0000001A] rounded-[20px] ">
      {rating > 0 && (
        <div className="flex gap-x-1 mb-3">
          {[...Array(rating)].map((item, index) => (
            <img
              key={id * Math.random() * 10000}
              src={starImage}
              alt={`Rating ${index + 1}`}
            />
          ))}
        </div>
      )}
      <div className="flex">
        <h2 className="satoshi text-xl font-bold mr-1">{author}</h2>
        <img src={verifiedIcon} alt="verified" />
      </div>
      <p className="satoshi text-[#00000099] text-[16px] leading-6">
        {content}
      </p>
    </div>
  );
};

export default Testimonial;
