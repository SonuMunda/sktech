import Features from "../components/Featues";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <hr className="p-3 bg-gray-900" />
      <Features />
      <hr />
      <section className="details">
        <div className="container">
          <div className="details-top py-10 bg-gray-100">
            <p className="details-text text-center p-8 my-6">
              <span className="text-xl font-bold">Oceans Edge</span> is
              leveraging its years of experience with mobile technology to
              develop new innovative consumer mobile applications.
            </p>
            <div className="contact-details flex justify-center py-4 bg-gray-100 space-x-4 relative">
              <div className="left flex flex-col justify-between space-y-4 w-full md:w-1/2">
                <div className="flex justify-around">
                  <p className="text-gray-700">Follow us on Twitter</p>
                  <p className="text-gray-700">+97877388378</p>
                </div>
                <div className="flex justify-around space-x-4">
                  <div className="sms w-1/2">
                    <p className="text-gray-600">
                      iReadSMIME is a secure email reader for the iPhone, iPad,
                      and iPod Touch.
                      <a
                        href="http://bit.ly/zhzvxN"
                        className="text-blue-600 ml-1"
                      >
                        http://bit.ly/zhzvxN
                      </a>
                    </p>
                    <p className="text-gray-400 text-xs">just a minute</p>
                  </div>
                  <div className="location w-1/2">
                    <p className="text-gray-700">Oceans' Edge, Inc.</p>
                    <p className="text-gray-700">
                      1861 Wiehle Avenue Suite #250 Reston, VA 20190
                    </p>
                    <p className="text-gray-700">
                      E-mail:
                      <a
                        href="mailto:information@oceansedge.biz"
                        className="text-blue-600 ml-1"
                      >
                        information@oceansedge.biz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="right flex items-center w-full md:w-auto mt-4 md:mt-0">
                <p className="text-gray-700 mr-4">View map</p>
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55463.21375855086!2d76.65618076498085!3d30.698314897544357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e1!3m2!1sen!2sin!4v1722920451719!5m2!1sen!2sin"
                    width="200"
                    height="200"
                    className="border-0"
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
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
