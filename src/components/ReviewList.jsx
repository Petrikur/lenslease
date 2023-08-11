import React from "react";

import avatar from "../assets/images/avatar.png";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: avatar,
    backgroundColor: "#EF4444",
    rating: [1, 1, 1, 1, 1],
    country: "Canada",
    city: "Montreal",
    testimonial:
      "I rented a camera from this service, and I was amazed by how smooth the entire process was. The camera was shipped to me promptly, and the return process was equally convenient. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: avatar,
    backgroundColor: "#EF4444",
    rating: [1, 1, 1, 1, 1],
    country: "USA",
    city: "New York",
    testimonial:
      "I needed a camera for a short project, and this rental service made it incredibly easy for me. The entire process was simple, from booking to returning the camera. I was impressed with the quality of the equipment as well. Great service!",
  },
  {
    id: 3,
    name: "John Doe",
    image: avatar,
    backgroundColor: "#EF4444",
    rating: [1, 1, 1, 1],
    country: "Sweden",
    city: "Stockholm",
    testimonial: "I wanted to save money by renting drone instead off buying it myself. I only needed for one time use so this service is very convenient!",
  },
];

const ReviewList = () => {
  return (
    <section className="  dark:text-neutral-300 px-4">
      <div className="mx-auto text-gray-600 max-w-2xl text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Our Reviews</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          We're proud to share what our customers have to say about their
          experience with our products and services. Read the reviews below
          to get an idea of how our offerings have made a positive impact on
          their lives.
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 md:mx-20 ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex justify-center text-gray-600">
            <div className="max-w-md w-full">
              <div className="block rounded-lg bg-white shadow-lg  h-full"> 
               {/* dark:bg-neutral-700 dark:shadow-black/30 */}
                <div
                  className="h-28 overflow-hidden rounded-t-lg bg-red-400"
                ></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src={testimonial.image} alt="Avatar" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">
                    {testimonial.name}
                  </h4>

                  <h5 className="mb-2">{testimonial.country} / {testimonial.city}</h5>
                  <hr />
                  <p className="mt-4 flex justify-center items-center">
                    {testimonial.rating.map((star, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="text-yellow-400 h-6 w-6 mr-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.182l-4.069 2.343 1.008-4.661L5.003 9.148l4.692-.383L12 4.097l2.305 4.668 4.692.383-3.935 3.716 1.008 4.661z" />
                      </svg>
                    ))}
                  </p>
                  <p className="mt-4">{testimonial.testimonial}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewList;
