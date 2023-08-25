import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error,setError] = useState("");
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email is not valid");
      return;
    }
    setFormSubmitted(true)
    setName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start mt-36 mb-20 px-4 md:px-0 overflow-x-hidden">
        <div className="w-full md:w-1/3 lg:mb-0 mb-10" data-aos="fade-right" id="myDiv">
          <h2 className="text-4xl mb-4">Want to talk?</h2>
          <p className="max-w-sm">
            If you want to talk about renting or anything related, just give us a call or fill out the form, and we'll
            get back to you!
          </p>
          <div className="flex items-center mt-4 gap-2">
            <FaPhone size={20} className="text-red-500 mr-2 " />
            <p>Phone +(123) 456 789</p>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <FaEnvelope size={20} className="text-red-500 mr-2" />
            <p>Email: LensLease@example.com</p>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <FaMapMarkerAlt size={20} className="text-red-500 mr-2" />
            <p>Address: 123 Main St Joensuu, Finland</p>
          </div>
        </div>

        <div className="w-full md:w-1/3" data-aos={"fade-left"}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-md leading-6 text-gray-900">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              autoComplete="name"
              className="formInput"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="phone-number" className="block text-md leading-6 text-gray-900">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone-number"
              autoComplete="tel"
              className="formInput"
              required
              value={phoneNumber}
              onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^\d+$/.test(inputValue)) {
                    setPhoneNumber(inputValue);
                  }
                }}
            />
            <label htmlFor="email" className="block text-md leading-6 text-gray-900">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              autoComplete="email"
              required
              className="formInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-500">{error}</p>
            <label htmlFor="message" className="block text-md leading-6 text-gray-900">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write message..."
              rows={4}
              className="w-full bg-gray-100 h-24 mb-2 py-2 px-2 border-none"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600"
            >
              Let's talk
            </button>
          </form>
          {formSubmitted && (
            <div data-aos={"fade-up"} className="bg-green-300 p-4 mt-4 text-bold rounded text-center">Form submitted. Thank you!</div>
          )}
        </div>
      </div>
    </>
  );
};
