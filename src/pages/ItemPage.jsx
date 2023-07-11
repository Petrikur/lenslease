import React, { useEffect, useState } from "react";
import {
  Link,
  UNSAFE_DataRouterStateContext,
  useParams,
} from "react-router-dom";
import { cameraData } from "../components/data/data";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import { CartContext } from "../components/context/CartContext";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ItemPage = () => {
  const { id } = useParams();
  const product = cameraData.find((item) => item.id === Number(id));
  const [showNotification, setShowNotification] = useState();

  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    setShowNotification(true);
    cart.addToCart(product);
    cart.setProductAdded(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    brand,
    model,
    image,
    pricePerDay,
    discount,
    description,
    technicalAdvantages,
  } = product;

  return (
    <>
      <PageBanner phrase={brand} phraseSpanText={model} />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-3xl font-bold mt-10">{`${brand} ${model}`}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8 ">
          <div className="relative flex justify-center items-center">
            {/* Discount badge */}
            {discount > 0 && (
              <div className="absolute top-0 left-0 w-12 h-12 text-center rounded-tl-md -rotate-12">
                <div className="w-full h-full bg-gradient-to-tr from-red-500 to-yellow-400 text-md font-semibold px-2 py-2 flex items-center justify-center">
                  -{discount}% off
                </div>
              </div>
            )}
            <img
              src={image}
              alt={model}
              className="rounded-lg fixed-size-image"
            />
          </div>
          <div>
            <p className="text-lg mb-4">{description}</p>
            <h2 className="text-xl font-bold mb-2">Technical Advantages:</h2>
            <ul className="list-disc pl-6 mb-4">
              {technicalAdvantages.map((advantage) => (
                <li key={advantage}>{advantage}</li>
              ))}
            </ul>
            <p className="text-sm py-4"> You can set dates for rent in cart.</p>
            <p className="text-xl font-bold mb-2">
              Price:{" "}
              {discount > 0 ? (
                <>
                  <span className="line-through">€{pricePerDay * 7}</span> €
                  {((pricePerDay * (100 - discount)) / 100) * 7}
                </>
              ) : (
                `€${pricePerDay * 7}`
              )}
              / week
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded shadow-md hover:bg-red-600"
              >
                Add to Cart
              </button>
              <Link
                to={{ pathname: "/equipment" }}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded shadow-md hover:bg-red-600"
              >
                Back to Shop
              </Link>
            </div>
            {showNotification && (
              <div
                data-aos={"fade-up"}
                className="bg-green-300 p-2 mt-4 text-bold rounded text-center"
              >
                Item added to cart!
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-32"></div>
      <Footer />
    </>
  );
};
