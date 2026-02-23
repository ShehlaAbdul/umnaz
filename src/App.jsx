import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home";
import "./styles/global.scss";
import "./styles/style.scss";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Partners from "./Pages/Partners/Partners";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
AOS.init();
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/haqqimizda" element={<AboutPage />} />
            <Route path="/terefdaslar" element={<Partners />} />
            <Route path="/elaqe" element={<ContactPage />} />
            <Route path="/xidmetler" element={<ServicesPage/>}/>
            {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
