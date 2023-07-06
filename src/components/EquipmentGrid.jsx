import React, { useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";
import { ImageLoader } from "./ImageLoader";

import { cameraData } from "../components/data/data";

const options = [
  { label: "Canon", value: "Canon" },
  { label: "Nikon", value: "Nikon" },
  { label: "Sony", value: "Sony" },
];

const filterButtons = [
  "All products",
  "Cameras",
  "Drones",
  "Equipment",
];

export const EquipmentGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setDropdownOpen(false);
  };

  const hasFilters = selectedCategory !== "All" || selectedBrand !== "";


  // Filter by brand and category 
  const filteredData = cameraData.filter((item) => {
    if (selectedCategory === "All" || selectedCategory === "") {
      if (selectedBrand === "All" || selectedBrand === "") {
        return true;
      } else {
        return item.brand === selectedBrand;
      }
    } else {
      if (selectedBrand === "All" || selectedBrand === "") {
        return item.category.includes(selectedCategory);
      } else {
        return (
          item.category.includes(selectedCategory) &&
          item.brand === selectedBrand
        );
      }
    }
  });

// Display selected filters  
  const selectedFilters = () => {
    if (hasFilters) {
      return (
        <>
          <div className="flex items-center justify-center gap-2 text-center mt-24 lg:mt-0 lg:mx-0 mx-2">
            {hasFilters && filteredData.length < 1 ? (
              <p className="text-red-500 text-xl ">
               No results with filters:  
              </p>
            ) : (
              "Filters: "
            )}
            {selectedBrand ? (
              <div className="filterContainer">
                <IoClose
                  onClick={() => setSelectedBrand("")}
                  size={16}
                  className="filterIcon"
                />

                {selectedBrand}
              </div>
            ) : (
              ""
            )}
            /
            {selectedCategory ? (
              <div className="filterContainer">
                <IoClose
                  onClick={() => setSelectedCategory("")}
                  className="filterIcon"
                />{" "}
                {selectedCategory}
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      );
    }
  };

  return (
    <>
    <ul className="mt-10 max-w-full h-20 text-bold text-xl flex flex-wrap justify-center gap-4">
      <li className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="filterButton"
        >
          Brands
        </button>
        {dropdownOpen && (
          <ul className="absolute top-full left-0 w-full bg-white py-2 cursor-pointer">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleBrandSelect(option.value)}
                className="filterButton"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </li>
      {filterButtons.map((label, index) => (
        <li key={index}>
          <button
            onClick={() => {
              if (label === "All products") {
                setSelectedCategory("All");
              } else {
                setSelectedCategory(label);
              }
              // setSelectedBrand("");
            }}
            className="filterButton"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  
  
    <div>{selectedFilters()}</div>
    <div className="mt-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            className=" mx-2 lg:mx-0 flex flex-col py-4 shadow-md hover:shadow-2xl hover:scale-105 hover:border-red-500 hover:border rounded"
          >
            <ImageLoader className="p-4 h-2/3" src={item.image} alt="Camera" />
            <div className="flex flex-col justify-between items-start pl-4">
              <div>
                <h2 className="text-md mb-2 text-neutral-800">{item.brand}</h2>
                <h2 className="font-bold text-xl mb-2">
                  {item.brand} {item.model}
                </h2>
                <p className="mb-4 text-2xl">
                  €{item.pricePerDay * 7}
                  <span className=""> /week</span>
                </p>
              </div>
              <button className="px-14 py-2.5 rounded-md bg-red-500 text-sm font-semibold text-white shadow-sm hover:bg-red-600">
                Get it!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
