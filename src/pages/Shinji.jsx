import Shinji1 from "../../public/images/Shinji/Shinji1.png";
import Shinji2 from "../../public/images/Shinji/Shinji2.png";
import Shinji3 from "../../public/images/Shinji/Shinji3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CenterText from "../Components/CenterText";

const Shinji = ({ isActive }) => {
 useGSAP(() => {
  if (!isActive) return;
  const tl = gsap.timeline();

  tl.from(".VOGUE-SHINJI", {
    y: 40,
    scale: 1.1,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  })
    .from(
      ".CENTER-TEXT",
      {
        x: -2000,
        duration: 1,
        ease: "power2.out",
      },
      "0"
    )

    
    .from(
      ".SHINJI1",
      {
        y: -400,
        duration: 1.5,
        ease: "expo.out",
      },
      "0"
    )

    
    .from(
      ".SHINJI2",
      {
        x: -400,
        duration: 1.5,
        ease: "expo.out",
      },
      "0"
    )

    
    .from(
      ".SHINJI3",
      {
        y: 400,
        duration: 1.5,
        ease: "expo.out",
      },
      "0"
    );
}, [isActive]);


  return (
    <>
      <div
        className={`w-full h-screen bg-[#FDFDFD] relative ${
          !isActive ? "hidden" : ""
        }`}
      >
        <CenterText text="VENIR" color="#FFD700" rotation={4} />

        <div className="VOGUE-SHINJI flex justify-center">
          <h1 className='font-["Vogue"] text-[32vw] text-[#FFD700] leading-none inline-block'>
            VOGUE
          </h1>
        </div>

        <div className="IMAGES">
          
          <img
            src={Shinji2}
            alt="Shinji2"
            className="SHINJI2 w-[40vw] absolute z-30 bottom-0 left-0 object-cover"
          />

          
          <img
            src={Shinji1}
            alt="Shinji1"
            className="SHINJI1 absolute right-0 bottom-0 w-[30vw] z-40"
          />

          
          <img
            src={Shinji3}
            alt="Shinji3"
            className="SHINJI3 absolute left-1/2 -translate-x-1/2 bottom-10 w-[25vw] h-[80vh] object-cover z-20 border-8 border-black"
          />
        </div>
      </div>
    </>
  );
};

export default Shinji;
