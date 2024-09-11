import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full z-10 text-white border-b border-gray-800">
      <div className="mx-auto flex flex-col w-full">
        <div className="header-top flex justify-end py-3 px-6 bg-gray-800 w-full">
          <div className="flex">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1">
              Login
            </button>
            <Link to="/client/login">
              <button className="bg-gray-100 text-gray-900 px-3 py-1 hover:bg-gray-200">
                Client
              </button>
            </Link>

            <Link to="/employee/login">
              <button className="bg-gray-100 text-gray-900 px-3 py-1 hover:bg-gray-200">
                Employee
              </button>
            </Link>
          </div>
        </div>
        <div className="header-bottom flex items-center justify-around py-4 px-6 bg-gray-900 text-white top-0 left-0">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">sk</span>tech
            </div>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/solutions" className="hover:text-gray-300">
              Solutions
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
