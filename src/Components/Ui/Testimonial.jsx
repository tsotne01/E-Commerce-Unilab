import starImage from "../../assets/Images/Star.svg";

const Testimonial = ({
  rating = 5,
  heading = "dsadad",
  author = "dasda",
  content = "dsads",
}) => {
  return (
    <div className="w-80 md:w-[400px] px-7 py-8 border-solid border-[#0000001A]">
      {rating > 0 && (
        <div className="flex gap-x-1">
          {[...Array(rating)].map((item, index) => (
            <img
              key={Math.random() * 10000}
              src={starImage}
              alt={`Rating ${index + 1}`}
            />
          ))}
        </div>
      )}
      <h1>{heading}</h1>
      <h2>{author}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Testimonial;
