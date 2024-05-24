import "./App.css";
import "./Home-Page/Navbar.css";
import "./Home-Page/Content.css";
import "./Home-Page/Footer.css";
import "./Login-Page/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Home-Page/Navbar.js";
import Content from "./Home-Page/Content.js";
import Footer from "./Home-Page/Footer.js";
import Login from "./Login-Page/Login.js";
import Services from "./Services/Services.jsx";
import WorkerDetails from "./Worker-Page/worker.js";
import ContactUs from "./Contact-Us/ContactUs.js";
import AboutUs from "./About-Us/AboutUs.js";
import Tourist from "./Tourist-Page/tourist.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Navbar />
                <Content />
                <Footer />
              </>
            }
          />
          <Route path="signup" exact element={<Login />} />
          <Route path="login" exact element={<Login />} />
          <Route
            path="services"
            exact
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="workerDetails"
            exact
            element={
              <>
                <Navbar />
                <WorkerDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="contactus"
            exact
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="aboutus"
            exact
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="tourist"
            exact
            element={
              <>
                <Navbar />
                <Tourist />
                <Footer />
              </>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
