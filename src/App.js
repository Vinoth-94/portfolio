import { useState } from "react";
import Contact from "./components/Contact";
import Experince from "./components/Experince";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  const [dark,setdark]=useState(false)
  return (
    <div className={`App ${dark ? 'drk' :'' }`} >
      <Navbar drk={dark} setdrk={setdark} />
      <Intro />
      <Services />
      <Experince />
      <Work />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
