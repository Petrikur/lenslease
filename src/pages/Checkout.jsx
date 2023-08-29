import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../components/context/CheckoutContext";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import { PaymentForm } from "../components/PaymentForm";
import CartItem from "../components/cart/CartItem";


export const Checkout = () => {
  const { checkoutData } = useContext(CheckoutContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleSubmission = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <PageBanner name="Checkout" />

      <div className="text-3xl text-center mt-20">Summary</div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-2 lg:mx-10 my-14 gap-8">
        {!isSubmitted && (
          <>
            <div>
              <div className="text-center text-xl">Your Items</div>

              {/* Cart Items */}
              {checkoutData.items.map((item, index) => {
                const isFirstOccurrence =
                  checkoutData.items.findIndex((i) => i.id === item.id) ===
                  index;
                const itemCount = checkoutData.items.filter(
                  (i) => i.id === item.id
                ).length;

                return (
                  isFirstOccurrence && (
                    <CartItem
                      key={item.id}
                      item={item}
                      itemCount={itemCount}
                      isCheckOut={true}
                    />
                  )
                );
              })}
              {/* User Info  */}
              <div className="lg:pl-4 mt-8">
                <h2 className="text-xl text-center">Information</h2>

                <p className="checkoutHeading">Date:</p>
                <div className="checkoutText">
                  {formatDate(checkoutData.selectedDate[0].startDate)} -{" "}
                  {formatDate(checkoutData.selectedDate[0].endDate)}
                </div>
                <p className="checkoutHeading">Name:</p>
                <p className="checkoutText">{checkoutData.name}</p>
                <p className="checkoutHeading">Phone:</p>
                <p className="checkoutText">{checkoutData.phoneNumber}</p>
                <p className="checkoutHeading">Email:</p>
                <p className="checkoutText">{checkoutData.email}</p>

                {checkoutData.shippingOption === "shipping" ? (
                  <>
                    <p className="checkoutHeading">Address:</p>
                    <p className="checkoutText">{checkoutData.address}</p>
                    <p className="checkoutHeading">Country:</p>
                    <p className="checkoutText">{checkoutData.country}</p>
                    <p className="checkoutHeading">Zip code:</p>
                    <p className="checkoutText">{checkoutData.zipCode}</p>
                  </>
                ) : (
                  <>
                    <p className="checkoutHeading">Pickup Location:</p>
                    <p className="checkoutText">
                      {checkoutData.pickupLocation} Location{" "}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div>
              <PaymentForm shippingOption={checkoutData.shippingOption} onSubmit={handleSubmission} totalAmount={checkoutData.totalAmount} />
            </div>
          </>
        )}

        {isSubmitted && (
          <div className="col-span-2">
            <div className="text-center">
              <h2 className="text-2xl mb-2">Thank you!</h2>
              {checkoutData.shippingOption === "pickup" ? (
                <p>
                  Your items have been reserved and we are waiting for your
                  pickup at our {checkoutData.pickupLocation} location!
                </p>
              ) : (
                <p>
                  Your order has been received. We are shipping your products
                  shortly!{" "}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="pt-24"></div>
      <Footer />
    </>
  );
};
