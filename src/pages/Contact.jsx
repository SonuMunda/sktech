import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <main>
      <section className="hero bg-gray-900 h-80 flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white uppercase">
            Contact Us
          </h1>
        </div>
      </section>
      <hr className="border-gray-700" />
      <section className="contact-details py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-10 flex-wrap text-white">
            <div className="flex flex-col items-center bg-gray-900 w-full md:w-80  shadow-md py-12 px-6">
              <div className="icon text-6xl mb-4">
                <FaPhoneAlt />
              </div>
              <p className="text-lg font-bold">987687577568</p>
            </div>
            <div className="flex flex-col items-center bg-gray-900 w-full md:w-80  shadow-md py-12 px-6">
              <div className="icon text-6xl mb-4">
                <FaEnvelope />
              </div>
              <p className="text-lg font-bold">hjhhjjgk@email.com</p>
            </div>
            <div className="flex flex-col items-center bg-gray-900 w-full md:w-80  shadow-md py-12 px-6">
              <div className="icon text-6xl mb-4">
                <FaLocationDot />
              </div>
              <p className="text-lg font-bold">Kharar Mohali</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Send A Message
          </h1>
          <form
            action=""
            className="max-w-lg mx-auto bg-gray-800 p-6  shadow-md"
          >
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-3 border border-gray-700 bg-gray-900 text-white w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phone" className="block text-lg font-medium mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="p-3 border border-gray-700 bg-gray-900 text-white  w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="p-3 border border-gray-700 bg-gray-900 text-white  w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-6  hover:bg-indigo-700 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
