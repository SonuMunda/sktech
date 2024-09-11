import { useState } from "react";

const EmployeeLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
  };

  return (
    <div className="flex items-center justify-center bg-gray-900" style={{minHeight:"80vh"}}>
      <div className="w-full max-w-sm p-8 bg-gray-800 bg-opacity-70 backdrop-blur-sm shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 text-white">Employee Portal</h1>
          <p className="text-gray-300">Log in to access your dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-200">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
