import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header fixed w-full z-10">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-end py-3 px-6">
          <div className="flex items-center">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 ">
             <Link to={"/login"}>Login</Link>
            </button>
            <button className="bg-gray-100 text-gray-900 px-3 py-1 ">
              Client
            </button>
            <button className="bg-gray-100 text-gray-900 px-3 py-1 ">
              Employee
            </button>
          </div>
        </div>
        <div className="flex items-center justify-around py-4 px-6 bg-gray-900 text-white">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">e</span>ceans edge
            </div>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Solutions
            </a>
            <a href="#" className="hover:text-gray-300">
              Mobile Applications
            </a>
            <a href="#" className="hover:text-gray-300">
              Careers
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
