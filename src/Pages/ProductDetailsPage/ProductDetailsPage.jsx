import { Link, useParams } from "react-router-dom";
import productPhoto1 from "../../assets/Images/Product_image_1.png";
import productPhoto2 from "../../assets/Images/Product_image_2.png";
import productPhoto3 from "../../assets/Images/Product_image_3.png";
import { useContext, useEffect, useState } from "react";
import { getProductById, getProducts, getTestimonialById } from "../../Services/Api/api";
import starIcon from "../../assets/Images/Star.svg";
import Testimonial from "../../Components/Ui/Testimonial";
import Button from "../../Components/Ui/Button";
import decrementIcon from "../../assets/Icons/Decrement-icon.svg";
import incrementIcon from "../../assets/Icons/Increment-icon.svg";
import { CartContext } from "../../Services/Providers/CartContext";
import shirtImage from "../../assets/Images/shirt.png"
import ItemCard from "../../Components/Ui/ItemCard";
import arrowRightGray from "../../assets/Icons/arrow-right-gray.svg"

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [currentPhoto, setCurrentPhoto] = useState(productPhoto1);
  const [currentProduct, setCurrentProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [products, setProducts] = useState();

  const { addToCart } = useContext(CartContext);

  const handleAddtoCart = () => {
    if (numberOfItems === 0) return;
    console.log({ ...currentProduct, numberOfItems });
    addToCart({ ...currentProduct, numberOfItems });
  };

  useEffect(() => {
    getProductById(id)
      .then((product) => {
        setCurrentProduct(product);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });

  }, [id]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products.slice(0, 4)))
      .catch((err) => console.error(err));
  }, [])

  useEffect(() => {
    getTestimonialById(id)
      .then((reviews) => {
        setReviews(reviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [id]);
  
  useEffect(()=>{
    setNumberOfItems(0)
  },[id])


  return (
    <main className="flex max-w-[1440px] w-full lg:px-[65px] pl-6 flex-col justify-center mx-auto">
      <div className="flex items-center gap-x-1 text-[#00000099] text-base mb-9 border-t-1 border-[#0000001A] pt-6">
        <span className="satoshi flex items-center">Home <img className="inline-block" src={arrowRightGray} alt="arrow right" /> 
        </span> 
        <span className="flex items-center">Shop <img className="inline-block" src={arrowRightGray} alt="arrow right" /></span>  
        <span className="flex items-center">Men <img className="inline-block" src={arrowRightGray} alt="arrow right" /></span> 
        <span className="text-black">T-shirts</span>
      </div>
      <div className="md:flex mb-20">
        <div className="max-w-fit mx-auto md:mx-0 flex flex-col justify-center items-center md:flex-col lg:flex-row-reverse gap-3 md:mr-10">
          <div className="bg-[#F0EEED] rounded-[40px]">
            <img
              className="w-[354px] min-w-[354px] min-h-[290px] md:min-h-[530px] md:min-w-[444px] rounded-[40px] object-center"
              src={currentPhoto}
              alt="t-shirt"
            />
          </div>
          <div className="flex md:flex-row lg:flex-col gap-3 mb-5">
            <button
              type="button"
              onClick={() => setCurrentPhoto(productPhoto1)}
            >
              <img
                className="w-[111px] h-24 md:min-w-[152px] md:min-h-[167px] object-fill rounded-[20px]"
                src={productPhoto1}
                alt="t-shirt"
              />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPhoto(productPhoto2)}
            >
              <img
                className="w-[111px] h-24 md:min-w-[152px] md:min-h-[167px] object-fill rounded-[20px]"
                src={productPhoto2}
                alt="t-shirt"
              />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPhoto(productPhoto3)}
            >
              <img
                className="w-[111px] h-24 md:min-w-[152px] md:min-h-[167px] object-fill rounded-[20px]"
                src={productPhoto3}
                alt="t-shirt"
              />
            </button>
          </div>
        </div>
        {currentProduct && (
          <div className="flex justify-center items-center">
            <div className="max-w-fit">
              <h2 className="integral-cf font-bold text-2xl leading-7 mb-[14px] sm:text-3xl md:text-5xl md:leading-normal">
                {currentProduct.name}
              </h2>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: Math.round(currentProduct.rating) }).map(
                  () => (
                    <img
                      key={Math.floor(Math.random() * 1000)}
                      className="text-yellow-500"
                      src={starIcon}
                      alt="star"
                    />
                  ),
                )}
                <span className="satoshi text-sm">
                  {currentProduct.rating}{" "}
                  <span className="text-[#00000099]">/5</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-[32px] satoshi mb-5 ">
                <span className="font-semibold">${currentProduct.price}</span>
                <span className="line-through text-[#0000004D] font-semibold">
                  ${currentProduct.oldPrice}
                </span>
                <span className="bg-[#FF33331A] text-base inline-block h-fit px-[14px] py-[6px] rounded-lg text-red-500 align-middle">
                  -{currentProduct.discountPercent}%
                </span>
              </div>
              <span className="text-base text-[#00000099] block leading-[22px] font-medium satoshi mb-6 pb-6 border-b-1 border-[#0000001A]">
                {currentProduct.description}
              </span>

              <div className="colors">
                <label htmlFor="color1">
                  <h3 className="text-[#00000099] text-base satoshi font-medium mb-4">
                    Select Colors
                  </h3>
                </label>
                <div className="flex gap-6 pb-6 mb-6 border-b-1 border-[#0000001A]">
                  <label
                    htmlFor="color1"
                    className="bg-blue-200 rounded-full w-9 h-9"
                  >
                    <input
                      className="hidden"
                      id="color1"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                
                  <label
                    htmlFor="color2"
                    className="bg-blue-200 rounded-full w-9 h-9"
                  >
                    <input
                      className="hidden"
                      id="color2"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                  <label
                    htmlFor="color3"
                    className="bg-green-700 rounded-full w-9 h-9"
                  >
                    <input
                      className="hidden"
                      id="color3"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                </div>
              </div>

              <div className="size">
                <label htmlFor="size1">
                  <h3 className="text-[#00000099] text-base satoshi font-medium mb-4">
                    Choose Size{" "}
                  </h3>
                </label>
                <div className="flex gap-2 flex-wrap sm:gap-3 md:gap-4 lg:gap-6 pb-6 mb-6 border-b-1 border-[#0000001A]">
                  <label
                    htmlFor="size1"
                    className="bg-zinc-100 rounded-[62px] px-6 py-3 whitespace-nowrap
"
                  >
                    Small
                    <input
                      className="hidden"
                      id="size1"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>

                  <label
                    htmlFor="size2"
                    className="bg-zinc-100 rounded-[62px] px-6 py-3 whitespace-nowrap
"
                  >
                    Medium
                    <input
                      className="hidden"
                      id="size2"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                  <label
                    htmlFor="size3"
                    className="bg-zinc-100 rounded-[62px] px-6 py-3 whitespace-nowrap
"
                  >
                    Large
                    <input
                      className="hidden"
                      id="size3"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                  <label
                    htmlFor="size4"
                    className="bg-zinc-100 rounded-[62px] px-6 py-3 whitespace-nowrap
"
                  >
                    X-Large
                    <input
                      className="hidden"
                      id="size4"
                      name="radiobtn"
                      type="radio"
                    />
                  </label>
                </div>
                <div className="flex gap-5">
                  <div className="bg-[#F0F0F0] p-3.5 rounded-[62px] flex items-center justify-between min-w-27 max-w-44 md:w-44 w-28">
                    <button
                      type="button"
                      onClick={() => setNumberOfItems((prev) => prev - 1)}
                    >
                      <img src={decrementIcon} alt="decrement" />
                    </button>
                    <span>{numberOfItems}</span>
                    <button
                      type="button"
                      onClick={() => setNumberOfItems((prev) => prev + 1)}
                    >
                      {" "}
                      <img src={incrementIcon} alt="increment" />
                    </button>
                  </div>
                  <Button
                    onClick={handleAddtoCart}
                    variant="primary"
                    className="rounded-[62px]"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="tabs mb-6">
        <span className="inline-block w-1/3 text-center py-4 px-7 border-b-1 border-[#0000001A]">Product Details</span>
        <span className="inline-block w-1/3 text-center py-4 px-7 border-b-1">Rating & Reviews</span>
        <span className="inline-block w-1/3 text-center py-4 px-7 border-b-1 border-[#0000001A]">FAQ</span>


      </div>
      <div className="mb-6 flex justify-between">
        <h3 className="satoshi font-bold text-2xl">All Reviews <span className="text-base text-[#00000099] font-medium">({reviews.length})</span></h3>
        <div className="flex gap-x-2.5 md:w-80">
          <Button className="border-0 border-transparent bg-[#F0F0F0] rounded-[62px] px-5 py-4" role="button"><span>Latest</span></Button>
          <Button variant="primary" className="rounded-[64px]" role="button">Write a review</Button>

        </div>
      </div>
      <div className="flex flex-wrap gap-5 mb-9">
        {reviews?.length &&
          reviews.map((review) => (
            <Testimonial className="w-1/2" testimonial={review} key={review.id} />
          ))}
      </div>
      <Button variant="secondary" className="md:w-[230px] w-44 mx-auto rounded-[62px] mb-16" role="button">Load More Reviews</Button>
      <div>
        <h2 className="text-center integral-cf font-extrabold text-5xl mb-14">You might also like</h2>
        <div>
          <div className="mx-auto flex gap-5 max-w-full overflow-scroll scrollbar-w-0 scroll">
            {!!products &&
              products?.map((item) => (
                <Link key={item.id} to={`/product-details/${item.id}`}>
                  <ItemCard
                    item={Object.assign({}, item, { image: shirtImage })}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
