import { RiMailLockLine, RiBrush2Line } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const features = [
  {
    title: "iSecureMail",
    description:
      "iSecureMail is an email application that supports S/MIME and GPG encryption.",
    icon: <RiMailLockLine size={64} />,
  },
  {
    title: "iReadSMIME",
    description:
      "iReadSMIME is a secure email reader for the iPhone, iPad, and iPod Touch.",
    icon: <MdOutlineAlternateEmail size={64}/>,
  },
  {
    title: "Device Wipe",
    description:
      "Device Wipe allows you to erase personal information, receive the phone’s location, or turn off the phone.",
    icon: <RiBrush2Line size={64} />, 
  },
];

const Features = () => {
  return (
    <section className="bg-white py-10">
      <div className="container py-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
                <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
