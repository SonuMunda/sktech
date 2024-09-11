import "./App.css";
import EmployeeLogin from "./auth/EmployeeLogin";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/login" element={<EmployeeLogin />} />
          <Route path="/client/login" element={<LoginPage />} />
          <Route path="/client/signup" element={<SignupPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
