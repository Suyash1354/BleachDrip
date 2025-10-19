
import gsap from "gsap";
import Ichigo from "./pages/Ichigo";
import Renji from "./pages/Renji";
import Rukia from "./pages/Rukia";
import Toshiro from "./pages/Toshiro";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Add this import

const App = () => {
  
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    // Create individual scroll triggers for each section
    sectionsRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });

    // Enable smooth scrolling with snap
    ScrollTrigger.create({
      trigger: ".MAIN",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / 3, // Snap to quarters (4 sections)
        duration: { min: 0.2, max: 0.5 },
        delay: 0.1,
        ease: "power1.inOut"
      }
    });
  }, []);

  return (
    <>
      <div className="MAIN w-full">
        {/* Section 1 - Ichigo */}
        <div 
          ref={el => sectionsRef.current[0] = el} 
          className="w-full h-screen"
        >
          <div className="w-full h-screen overflow-hidden fixed top-0 left-0">
            <Ichigo isActive={activeSection === 0} />
          </div>
        </div>

        {/* Section 2 - Renji */}
        <div 
          ref={el => sectionsRef.current[1] = el} 
          className="w-full h-screen"
        >
          <div className="w-full h-screen overflow-hidden fixed top-0 left-0">
            <Renji isActive={activeSection === 1} />
          </div>
        </div>

        {/* Section 3 - Rukia */}
        <div 
          ref={el => sectionsRef.current[2] = el} 
          className="w-full h-screen"
        >
          <div className="w-full h-screen overflow-hidden fixed top-0 left-0">
            <Rukia isActive={activeSection === 2} />
          </div>
        </div>

        {/* Section 4 - Toshiro */}
        <div 
          ref={el => sectionsRef.current[3] = el} 
          className="w-full h-screen"
        >
          <div className="w-full h-screen overflow-hidden fixed top-0 left-0">
            <Toshiro isActive={activeSection === 3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;