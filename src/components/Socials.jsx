import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
      <a target="_blank" href="https://www.facebook.com">
        <FaFacebook
          size={30}
          className="ml-4 text-2xl mr-4 text-blue-600 hover:text-blue-800"
        />
      </a>
      <a target="_blank" href="https://www.twitter.com">
        <FaTwitter
          size={30}
          className="text-2xl mr-4 text-blue-400 hover:text-blue-600"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com">
        <FaInstagram
          size={30}
          className="text-2xl mr-4 text-pink-600 hover:text-pink-800"
        />
      </a>
      <a target="_blank" href="https://www.github.com">
        <FaGithub
          size={30}
          className="text-2xl mr-4 text-gray-600 hover:text-gray-800"
        />
      </a>
    </div>
  );
};
