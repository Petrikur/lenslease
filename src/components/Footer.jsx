import React from "react";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";

const footerLists = [
  {
    title: "Rentals",
    items: ["Camera", "Lens", "Drone", "Equipment"],
  },
  {
    title: "Support",
    items: ["FAQs", "Contact", "Terms And Conditions", "Privacy"],
  },
  {
    title: "Company",
    items: ["About", "Reviews", "Careers"],
  },
  {
    title: "Legal",
    items: ["Rental agreement", "Return Policy", "Shipping", "Policies"],
  },
];

const Address = () => {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-lg font-semibold">HQ Address:</p>
      <p>123 Main St Joensuu, Finland</p>
      <p className="text-lg font-semibold pt-2">Working Hours:</p>
      <p>Monday-Friday: 9am-5pm</p>
      <p>Saturday: 10am-3pm</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full mt-24 text-gray-300 py-y px-2 lg:px-0 bg-gray-100">
      <hr></hr>
      <div className="text-black text-md max-w-[1240px] mx-auto border-b-2 border-gray-600 py-8">
        <div className="text-3xl mb-4">Lens lease</div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col space-y-2">
            <Address />
          </div>
          <div className="flex flex-col space-y-2 pt-4">
            <p className="text-lg font-semibold">Contact Us:</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg pt-4">Subscribe to our newsletter</p>
            <p className="py-2">
              The latest news, articles, and resources, sent to your inbox weekly
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-4 rounded-md mb-4 border"
                type="email"
                placeholder="Email"
              ></input>
              <button className="p-2 mb-4 bg-red-500 text-white rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-8 grid grid-cols-2 md:grid-cols-6">
        {footerLists.map((list, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2 text-black ">{list.title}</h6>
            <ul className="space-y-2 text-black ml-2 mt-1">
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={`/${item.toLowerCase()}`} className=" hover:underline hover:text-red-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col  max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
        <div className="py-4">2023 Lens Lease LLC. All rights reserved</div>
        <div><Socials /></div>
      </div>
    </div>
  );
};

export default Footer;
