import React, { useEffect } from "react";
import { useLoading } from "./LoadingContext";
import { Loader } from "./Loader";

export const ImageLoader = ({ src, alt, ...props }) => {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    const handleImageLoad = () => {
      setLoading(false);
    };

    const image = new Image();
    image.src = src;
    image.addEventListener("load", handleImageLoad);

    return () => {
      image.removeEventListener("load", handleImageLoad);
    };
  }, [src, setLoading]);

  return (
    <>
      {loading && <Loader />}
      <img
        src={src}
        alt={alt}
        className={`opacity-${loading ? "0" : "100"} w-full h-[700px]`}
        {...props}
      />
    </>
  );
};
