import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import React,{ useContext,useState,useEffect } from "react";
import { CartContext } from "../components/context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { cameraData } from "../components/data/data";
import CartItem from "../components/cart/CartItem";
import { CartInput } from "../components/cart/CartInput";
import { Link,useNavigate  } from "react-router-dom";
import { CheckoutProvider } from "../components/context/CheckoutContext";
import { CheckoutContext } from "../components/context/CheckoutContext";
export const Cart = () => {

  const cart = useContext(CartContext);
  const { updateCheckoutData } = useContext(CheckoutContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [shippingOption, setShippingOption] = useState("pickup");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [cartTotalPrice,setCartTotalPrice] = useState(0);

  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);



  useEffect(() => {
   setCartTotalPrice(calculatePrice(formattedStartDate,formattedEndDate))

  },[cart.cartItems,selectedDate])


  const handleSubmit = (e) => {
    e.preventDefault();
    updateCheckoutData({
      items: cart.cartItems,
      totalAmount:cartTotalPrice,
      selectedDate,
      name,
      phoneNumber,
      email,
      address,
      country,
      zipCode,
      shippingOption,
      pickupLocation,
    });

   
    navigate('/checkout');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleShowDatePicker = () => {
    setShowDatePicker((prevVal) => {
      return !prevVal;
    });
  };

  const handleConfirmDate = () => {
    setShowDatePicker(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US");
  };

  const formattedStartDate = formatDate(selectedDate[0].startDate);
  const formattedEndDate = formatDate(selectedDate[0].endDate);

  let priceString;

  formattedStartDate === formattedEndDate
    ? (priceString = `Your price for date ${formattedStartDate} is `)
    : (priceString = `Your price for dates ${formattedStartDate} - ${formattedEndDate} is `);

  const calculatePrice = (startDate, endDate) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const numberOfDays = Math.ceil(
      (endDateObj - startDateObj) / (1000 * 60 * 60 * 24) + 1
    );

    let totalPrice = 0;
    const uniqueItemIds = new Set();

    cart.cartItems.forEach((item) => {
      if (!uniqueItemIds.has(item.id)) {
        const selectedCamera = cameraData.find(
          (camera) => camera.id === item.id
        );

        if (selectedCamera) {
          const { pricePerDay, discount } = selectedCamera;
          let itemPrice = pricePerDay;

          if (discount > 0) {
            const discountedPrice =
              pricePerDay - (pricePerDay * discount) / 100;
            itemPrice = discountedPrice;
          }

          const itemCount = cart.cartItems.filter(
            (i) => i.id === item.id
          ).length;

          uniqueItemIds.add(item.id);
          totalPrice += itemPrice * itemCount * numberOfDays;
        }
      }
    });

    setCartTotalPrice(totalPrice)
    return totalPrice;
  };

  return (
      <CheckoutProvider>
    <>
        <PageBanner name={"Cart"} />
        <div className="flex flex-col md:flex-row justify-center items-start mt-36 mb-20 mx-auto md:px-0 overflow-x-hidden container ">
          <div
            className="w-full md:w-1/2 text-center lg:mx-16"
            data-aos="fade-right"
          >
            <h2 className="text-2xl mb-4 text-center">Cart Items</h2>

            {/* Cart Items  */}
            {cart.cartItems?.map((item, index) => {
              const isFirstOccurrence =
                cart.cartItems.findIndex((i) => i.id === item.id) === index;
              const itemCount = cart.cartItems.filter(
                (i) => i.id === item.id
              ).length;

              return (
                isFirstOccurrence && (
                  <CartItem
                    key={item.id}
                    item={item}
                    itemCount={itemCount}
                    onRemoveFromCart={cart.removeFromCart}
                    onAddToCart={cart.addToCart}
                  />
                )
              );
            })}
            {cart.cartItems.length < 1 && (
              <div className="mt-10 flex justify-center items-center flex-col">
                {" "}
                <p className="text-xl mb-4">Your cart seems to be empty!</p>
                <Link
                  className="ml-2 heroButton bg-red-500 hover:bg-red-600"
                  to={{ pathname: "/equipment" }}
                >
                  Find Gear!
                </Link>
              </div>
            )}
            {/* calculate price for items  */}
            {cart.cartItems.length > 0 && (
              <div className="mt-20 text-xl">
                {priceString}
                <p className=" text-3xl mt-2 text-green-500 font-bold">
                  {cartTotalPrice} €
                </p>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
            <h2 className="mb-4 text-xl">Fill your information</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Date" className="">
                Date <span className="text-red-500 mb-4">*</span>
              </label>
              <button
              type="button"
                onClick={handleShowDatePicker}
                className="mt-1 bg-gray-100 w-full py-2 text-start pl-1 text-gray-500"
              >
                {showDatePicker
                  ? "Click to select date"
                  : `${formattedStartDate} - ${formattedEndDate}`}
              </button>

              {showDatePicker && (
                <div className="flex flex-col">
                  <div className="mt-4">
                    <DateRange
                      className="z-100"
                      ranges={selectedDate}
                      onChange={(item) => setSelectedDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      rangeColors={["#ED8936"]}
                    />
                  </div>
                  <button
                    className="max-w-xs bg-red-500 p-4 rounded hover:bg-red-600 font-bold text-white"
                    onClick={handleConfirmDate}
                  >
                    Confirm
                  </button>
                </div>
              )}
              {/* Contact form fields */}
              <CartInput
                label="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <CartInput
                label="Phone number"
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <CartInput
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="mt-8">
                <label
                  htmlFor="shipping-option"
                  className="block text-md leading-6 text-gray-900"
                >
                  Renting Option
                </label>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    id="pickup"
                    name="shipping-option"
                    value="pickup"
                    checked={shippingOption === "pickup"}
                    onChange={() => setShippingOption("pickup")}
                    className="mr-2"
                  />
                  <label htmlFor="pickup" className="mr-6">
                    Pickup
                  </label>
                  <input
                    type="radio"
                    id="shipping"
                    name="shipping-option"
                    value="shipping"
                    checked={shippingOption === "shipping"}
                    onChange={() => setShippingOption("shipping")}
                    className="mr-2"
                  />
                  <label htmlFor="shipping">Shipping</label>
                </div>
              </div>
              {shippingOption === "pickup" && (
                <div className="mt-8">
                  <label
                    htmlFor="pickup-location"
                    className="block text-md leading-6 text-gray-900"
                  >
                    Pickup Location
                  </label>
                  <select
                    id="pickup-location"
                    className="w-full bg-gray-100 border-none h-12 "
                    onChange={(e) => setPickupLocation(e.target.value)}
                    defaultValue={"Joensuu"}
                  >
                  
                    <option value="Joensuu">Joensuu, Finland</option>
                    <option value="Montreal">Montreal, Canada</option>
                    <option value="New York">New York, USA</option>
                  </select>
                </div>
              )}
              {shippingOption === "shipping" && (
                <>
                  <CartInput
                    label="Address"
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />

                  <CartInput
                    label="Country"
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />

                  <CartInput
                    label="Zip Code"
                    type="text"
                    id="zip-code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                  />
                </>
              )}
              <button
                type="submit"
                className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 mt-8"
              >
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
        <Footer />
    </>
      </CheckoutProvider>
  );
};
