import "./App.css";
import Nav from "./components/Nav";
import HeroSec from "./components/HeroSec";
import Project from "./components/Project";
import Benefits from "./components/Benefits";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Takenomics from "./components/Tekenomics";
import Partner from "./components/Partner";
import Public from "./components/Public";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import Backtotop from "./components/BackToTop";
function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);

  return (
    <div className=" scroll-smooth">
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          <div className=' bg-[#FFAD3B] xl:bg-[url("./assets/images/header-bg.png")] '>
            <Nav />
            <HeroSec />
          </div>
          <Project />
          <Benefits />
          <div className='bg-[url("./assets/images/whitepaper-bg.png")]'>
            <Whitepaper />
          </div>
          <Roadmap />
          <div className='bg-[url("./assets/images/PublicBg.png")] '>
            <Public />
          </div>
          <Takenomics />
          <div className='bg-[url("./assets/images/PublicBg.png")]'>
            <Partner />
          </div>
          <Footer />
          <Backtotop/>
        </div>
      )}
    </div>
  );
}

export default App;
