import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./DocsComponents/Header"
import Button from "./components/Button/Button"
import Badges from "./DocsComponents/Badges"
import Banners from "./DocsComponents/Banners"
import Buttons from "./DocsComponents/Buttons"
import Cards from "./DocsComponents/Cards"
import TestimonialWithImage from "./DocsComponents/TestimonialWithImage"
import TestimonialWithLogo from "./DocsComponents/TestimonialWithLogo"
import Menus from "./DocsComponents/Menus"
import Footer from "./DocsComponents/Footer"



function App() {
  return (
    <>
    <Header />
    <a className="github" href="https://github.com/Woosterwebdev/reactComponentLibrary">Click here for repository</a>
    <Badges />
    <Banners />
    <Buttons />
    <Cards />
    <TestimonialWithImage />
    <TestimonialWithLogo />
    <Menus />
    <Footer />
    </>
  )
}
      
ReactDOM.createRoot(document.getElementById('root')).render(<App />);