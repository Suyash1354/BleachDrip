import Aizen1 from "../../public/images/Aizen/Aizen1.png";
import Aizen2 from "../../public/images/Aizen/Aizen2.png";
import Aizen3 from "../../public/images/Aizen/Aizen3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CenterText from "../Components/CenterText";

const Aizen = ({ isActive }) => {
  useGSAP(() => {
    if (!isActive) return;
    const tl = gsap.timeline();

    tl.from(".VOGUE-AIZEN", {
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

      // Aizen1 - from LEFT
      .from(
        ".AIZEN1",
        {
          x: -400,
          duration: 1.5,
          ease: "expo.out",
        },
        "0"
      )

      // Aizen2 - from RIGHT
      .from(
        ".AIZEN2",
        {
          x: 400,
          duration: 1.5,
          ease: "expo.out",
        },
        "0"
      )

      // Aizen3 - from TOP
      .from(
        ".AIZEN3",
        {
          y: 600,
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
        {/* Center text */}
        <CenterText text="MOURIR" color="#A020F0" rotation={2} />

        {/* Main heading */}
        <div className="VOGUE-AIZEN flex justify-center">
          <h1 className='font-["Vogue"] text-[32vw] text-[#A020F0] leading-none inline-block'>
            VOGUE
          </h1>
        </div>

        {/* Images */}
        <div className="IMAGES">
          {/* Aizen1 - Left side */}
          <img
            src={Aizen1}
            alt="Aizen1"
            className="AIZEN1 w-[38vw] absolute z-30 bottom-0 left-0 object-cover"
          />

          {/* Aizen2 - Right side */}
          <img
            src={Aizen3}
            alt="Aizen2"
            className="AIZEN2 absolute right-10 bottom-20 w-[25vw] h-[70vh] object-cover z-40  border-8 border-black"
          />

          {/* Aizen3 - Center (from top) */}
          <img
            src={Aizen2}
            alt="Aizen3"
            className="AIZEN3 absolute left-1/2 -translate-x-1/2 bottom-0 w-[45vw] z-20"
          />
        </div>
      </div>
    </>
  );
};

export default Aizen;
