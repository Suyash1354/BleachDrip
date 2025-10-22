import gsap from "gsap";
import Renji1 from "../../public/images/Renji/Renji1.png";
import Renji2 from "../../public/images/Renji/Renji2.png";
import Renji3 from "../../public/images/Renji/Renji3.jpg";
import { useGSAP } from "@gsap/react";
import CenterText from "../Components/CenterText";

const Renji = ({ isActive }) => {
  useGSAP(() => {
    if (!isActive) return;
    const tl = gsap.timeline();

    tl.from(".VOGUERENJI", {
      scale: 2,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }
  
  );

  tl.from(
        ".CENTER-TEXT",
        {
          x: -2000, 
          duration: 1,
          ease: "power2.out", 
        },
        "0"
      ) 
    

    

    tl.from(
      ".Renji1",
      {
        x: -400,
        y: -200,
        scale: 2,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        zIndex: 50, // Maintain z-index during animation
      },
      "0"
    );

    

    tl.from(
      ".Renji2",
      {
        x: 400,
        y: 200,
        scale: 2,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        zIndex: 50, // Maintain z-index during animation
      },
      "0"
    );

    tl.from(
      ".Renji3",
      {
        y: -400,
        scale: 2,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        zIndex: 10, // Maintain z-index during animation
      },
      "0"
    );
  },[isActive]);

  return (
    <>
      <div
        className={`w-full h-screen bg-[#E3E3E3] relative overflow-hidden ${
          !isActive ? "hidden" : ""
        }`}
      >

        <CenterText text="VENIR" color="#9C0102" rotation={2} />
        
        <div className="VOGUERENJI flex justify-center relative z-30">
          <h1 className='font-["Vogue"] text-[32vw] text-[#9C0102] leading-none inline-block'>
            VOGUE
          </h1>
        </div>

        <div className="IMAGES">
          <img
            src={Renji1}
            alt="Renji1"
            className="Renji1 w-[38vw] absolute z-50 top-20 left-0  drop-shadow-[12px_15px_0px_rgba(0,0,0,0.2)]"
          />
          <img
            src={Renji2}
            alt="Renji2"
            className="Renji2 absolute -right-16 bottom-0 w-[40vw] z-50  drop-shadow-[12px_15px_0px_rgba(0,0,0,0.2)]"
          />
          <img
            src={Renji3}
            alt="Renji3"
            className="Renji3 w-[25vw] h-[80vh] object-cover absolute border-8 border-black top-10 left-1/2 -translate-x-1/2 z-10 "
          />
        </div>
      </div>
    </>
  );
};

export default Renji;
