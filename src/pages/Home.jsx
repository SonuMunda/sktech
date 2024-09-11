import React from "react";
import Features from "../components/Features";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Features />
      <section className="details bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="details-top py-12">
            <p className="details-text text-center p-6 md:p-12">
              <span className="text-2xl font-bold text-indigo-500">sk</span> <span className="text-2xl font-bold"> tech </span> is
              leveraging its years of experience with mobile technology to
              develop new innovative consumer mobile applications.
            </p>
            <div className="contact-details flex flex-col md:flex-row justify-center py-8 space-y-6 md:space-y-0 md:space-x-6 bg-gray-800 p-6">
              <div className="left flex flex-col space-y-6 w-full md:w-1/2">
                <div className="flex justify-between text-gray-300">
                  <p>Follow us on Twitter</p>
                  <p>+97877388378</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                  <div className="location flex-1 text-gray-300">
                    <p className="font-semibold">SK Tech, Inc.</p>
                    <p>1861 Wiehle Avenue Suite #250 Reston, VA 20190</p>
                    <p>
                      E-mail:
                      <a
                        href="mailto:information@oceansedge.biz"
                        className="text-blue-400 underline ms-2"
                      >
                        skteck@fakemail.com
                      </a>
                    </p>
                  </div>
                  <div className="right flex items-center justify-center w-full md:w-auto text-gray-300">
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55463.21375855086!2d76.65618076498085!3d30.698314897544357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e1!3m2!1sen!2sin!4v1722920451719!5m2!1sen!2sin"
                        width="300"
                        height="200"
                        className="border-0 rounded-lg shadow-lg"
                        loading="lazy"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
