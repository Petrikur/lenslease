import React from "react";
import camerasImage from "../assets/images/cameras.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const DiscountBanner = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "250px",
        overflow: "hidden",
      }}
    >
      <img
        src={camerasImage}
        alt="Cameras"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(1px)",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl">Midsummer Sale Right Now!</p>
          <p className="text-4xl">
            <span className="text-red-500">-20%</span> Off
          </p>
        <Link
        to={"equipment"}
          className="heroButton bg-red-500 hover:bg-red-600 py-3 mt-4 text-md " 
        >
          <FaChevronRight size={20} className="mr-2" /> Check out!
        </Link>
        </div>
      </div>
    </div>
  );
};
