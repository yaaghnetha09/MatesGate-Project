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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/" exact
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;