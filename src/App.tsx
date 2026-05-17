import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";

function App() {

 const [lightMode, setLightMode] = useState(false);

  useEffect(() => {

    if (lightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

  }, [lightMode]);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };


  return (
    <div >
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;