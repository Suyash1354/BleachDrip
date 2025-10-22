import { useState, useRef, useEffect } from "react";
import Ichigo from "./pages/Ichigo";
import Renji from "./pages/Renji";
import Rukia from "./pages/Rukia";
import Toshiro from "./pages/Toshiro";
import Byakuya from "./pages/Byakuya";
import Shinji from "./pages/Shinji";
import Aizen from "./pages/Aizen";
import FirstWhite from "./pages/FirstWhite";

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const isScrolling = useRef(false);
  const hasSeenFirstWhite = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  const changeSection = (direction) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setActiveSection((prev) => {
      if (direction === "down") {
        if (prev === 0) {
          hasSeenFirstWhite.current = true;
          return 1;
        }
        if (prev === 7) {

          return 0;
        }
        return prev + 1;
      } else {

        if (prev === 0) {

          return 7;
        }
        return prev - 1;
      }
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };


  const handleWheel = (e) => {
    if (e.deltaY > 0) changeSection("down");
    else changeSection("up");
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        changeSection("down");
      } else if (e.key === "ArrowUp") {
        changeSection("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  if (!isDesktop) {
    return (
      <div className="w-full h-screen bg-[#FDFDFD] flex items-center justify-center relative overflow-hidden">
        <div className="w-[110vw] h-screen flex items-center justify-center absolute top-0 left-[-5vw]">
          <div className="bg-black w-[110vw] flex items-center justify-center text-white font-['Vogue'] text-[3.2vw] h-[4vh] sm:h-[6vh] lg:h-[6vh]">
            <h1 className="leading-none py-2">DESKTOP EXPERIENCE ONLY</h1>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <img
        src="/bleach-shinji.gif"
        alt="Shinji Loader"
        className="w-[200px] h-auto object-contain"
      />
    </div>
  );
}


  
  return (
    <div className="w-full h-screen overflow-hidden" onWheel={handleWheel}>
      <FirstWhite isActive={activeSection === 0} />
      <Ichigo isActive={activeSection === 1} />
      <Renji isActive={activeSection === 2} />
      <Rukia isActive={activeSection === 3} />
      <Toshiro isActive={activeSection === 4} />
      <Byakuya isActive={activeSection === 5} />
      <Shinji isActive={activeSection === 6} />
      <Aizen isActive={activeSection === 7} />
    </div>
  );
};

export default App;
