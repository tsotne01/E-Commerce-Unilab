import { useParams } from "react-router-dom";
import productPhoto1 from "../../assets/Images/Product_image_1.png";
import productPhoto2 from "../../assets/Images/Product_image_2.png";
import productPhoto3 from "../../assets/Images/Product_image_3.png";
import { useEffect, useState } from "react";
import { getProductById } from "../../Services/Api/api";
import starIcon from "../../assets/Images/Star.svg";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [currentPhoto, setCurrentPhoto] = useState(productPhoto1);
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(() => {
    // Fetch product details based on id
    // Example: setCurrentProduct(productData);
    getProductById(id)
      .then((product) => {
        setCurrentProduct(product);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  return (
    <main className="max-w-full flex justify-center items-center">
      <div className="md:flex max-w-7xl">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:flex-row-reverse gap-3">
          <div className="w-80 bg-[#F0EEED] rounded-[40px]">
            <img
              className="w-[354px] h-[290px] object-contain "
              src={currentPhoto}
              alt="t-shirt"
            />
          </div>
          <div className="flex md:flex-col gap-3 mb-5">
            <button
              className="w-28 h-24"
              type="button"
              onClick={() => setCurrentPhoto(productPhoto1)}
            >
              <img
                className="w-[111px] h-24 object-fill rounded-[20px]"
                src={productPhoto1}
                alt="t-shirt"
              />
            </button>
            <button
              className="w-28 h-24"
              type="button"
              onClick={() => setCurrentPhoto(productPhoto2)}
            >
              <img
                className="w-[111px] h-24 object-fill rounded-[20px]"
                src={productPhoto2}
                alt="t-shirt"
              />
            </button>
            <button
              className="w-[111px] h-24 object-fill"
              type="button"
              onClick={() => setCurrentPhoto(productPhoto3)}
            >
              <img
                className="w-28 h-24 object-fill rounded-[20px]"
                src={productPhoto3}
                alt="t-shirt"
              />
            </button>
          </div>
        </div>
        {currentProduct && (
          <div className="flex justify-center items-center w-full">
            <div className="max-w-[95%]">
              <h2 className="integral-cf font-bold text-2xl leading-7 mb-[14px] md:text-5xl md:leading-normal">
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
                  <h3>Select Colors</h3>
                </label>
                <div className="flex gap-6">
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

              <p>Price: ${currentProduct.price}</p>
              <p>Category: {currentProduct.category}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetailsPage;
