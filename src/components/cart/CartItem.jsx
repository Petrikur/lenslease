import React from "react";
import { FiX } from "react-icons/fi";

const CartItem = ({ item, itemCount, onRemoveFromCart, onAddToCart, isCheckOut }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 mt-10 py-12  shadow-xl border rounded pr-4 relative">
     {/* Discount Badge */}
     {item.discount > 0 && (
          <div className="absolute top-0 md:-top-4 md:-left-4 text-white px-2  w-12 h-12 text-center rounded-tl-md -rotate-12 bg-gradient-to-tr from-red-500 to-yellow-400 text-md font-semibold ">
            -{item.discount}% off
          </div>
        )}
      <div className="flex items-center space-x-5 p-4 px-12  ">
        <img
          src={item.image}
          alt={item.model}
          className="w-20 h-20 rounded-md mr-4 relative"
        />
       
        <div>
          <p className="text-xl font-bold">
            {item.brand} {item.model}
          </p>
          {item.discount > 0 ? (
            <>
              <span className="line-through text-xl">€{item.pricePerDay * 7}</span> 
           <span className="text-xl"> €{((item.pricePerDay * (100 - item.discount)) / 100) * 7} /week</span>
            </>
          ) : (
            <p className="text-xl">€{item.pricePerDay * 7}  /week</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
        <div className="border-2 border-red-500 rounded-full text-center p-2">
          <span className="text-red-500">X {itemCount}</span>
        </div>
       
      {  !isCheckOut && <> <button
          className="cartCountButton"
          onClick={() => onRemoveFromCart(item.id)}
        >
          <span className="text-2xl">-</span>
        </button>
        <button
          className="cartCountButton"
          onClick={() => onAddToCart(item)}
        >
          <span className="text-2xl">+</span>
        </button> </>}
      </div>
    </div>
  );
};

export default CartItem;
