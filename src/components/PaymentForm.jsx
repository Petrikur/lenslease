import React, { useState } from "react";
import visa from "../assets/images/visalogo.png";
import cash from "../assets/images/cashlogo.png";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useLoading } from "./context/LoadingContext";
import { Loader } from "./Loader";

export const PaymentForm = ({ onSubmit,totalAmount }) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("visa");

   const cart = useContext(CartContext);
  const { loading, setLoading } = useLoading();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setName("");
      setCardNumber("");
      setExpiry("");
      setCvv("");
      onSubmit();
      setLoading(false);
      cart.clearCart()
    }, 2000);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <>
      <h2 className="text-center text-xl mb-10">Payment</h2>

      {loading && (
        <>
          <Loader />
        </>
      )}
      <div className="flex justify-center mb-8 ">
        {!loading && (
          <>
            <button
              className="mr-2 p-2 border rounded hover:bg-gray-100"
              onClick={() => handlePaymentMethodChange("visa")}
            >
              <img src={visa} alt="Visa" className="w-12 h-auto" />
            </button>
            <button
              className="mr-2  p-2 border rounded hover:bg-gray-100"
              onClick={() => handlePaymentMethodChange("cash")}
            >
              <img src={cash} alt="Cash" className="w-12 h-auto" />
            </button>{" "}
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {paymentMethod === "visa" && (
          <>
            <h2 className="text-xl mb-4">
              Payment Method: <span className="text-red-500">Visa</span>
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </>
        )}

        {paymentMethod === "visa" && (
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        )}

        {paymentMethod === "visa" && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="expiry"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                placeholder="MM/YY"
                onChange={(e) => setExpiry(e.target.value)}
                className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                placeholder="CVV"
                onChange={(e) => setCvv(e.target.value)}
                className="form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        )}
        {paymentMethod === "cash" && !loading && (
          <div>
            <h2 className="text-xl mb-4">
              Payment Method: <span className="text-red-500">Cash</span>
            </h2>
            <p className="mb-8">
              You can choose to pay with cash if you pick up rented items!
            </p>
          </div>
        )}
        {!loading &&  <>
          <div className="text-base mb-8">
            Amount:{" "}
            <span className="text-red-500  text-xl">€ {totalAmount}</span>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            {paymentMethod === "visa" ? (
              <span>Complete order</span>
            ) : (
              <span> Pay at pickup!</span>
            )}
          </button>
        </> }
       
      </form>
    </>
  );
};
