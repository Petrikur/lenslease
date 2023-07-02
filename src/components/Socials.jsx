import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export const Socials = () => {
  return (
    <div className="mt-10 flex justify-center md:justify-start pt-6 md:pl-[400px]">
      <div className="text-xl font-semibold ">Follow us here </div>

      <a target="_blank" href="https://www.facebook.com">
        <FaFacebook
          size={34}
          className="ml-4 text-2xl mr-4 text-blue-600 hover:text-blue-800"
        />
      </a>
      <a target="_blank" href="https://www.twitter.com">
        <FaTwitter
          size={34}
          className="text-2xl mr-4 text-blue-400 hover:text-blue-600"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com">
        <FaInstagram
          size={34}
          className="text-2xl mr-4 text-pink-600 hover:text-pink-800"
        />
      </a>
    </div>
  );
};
