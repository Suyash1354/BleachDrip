import Byakuya1 from "../../public/images/Byakuya/Byakuya1.png";
import Byakuya2 from "../../public/images/Byakuya/Byakuya2.png";
import Byakuya3 from "../../public/images/Byakuya/Byakuya3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CenterText from "../Components/CenterText";

const Byakuya = ({ isActive }) => {
  useGSAP(() => {
    if (!isActive) return;
    const tl = gsap.timeline();

    tl.from(".VOGUE-BYAKUYA", {
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
        ".BYAKUYA1",
        {
          x: 400,
          duration: 1.5,
          ease: "expo.out",
        },
        "0"
      )

      .from(
        ".BYAKUYA2",
        {
          x: -400,
          duration: 1.5,
          ease: "expo.out",
        },
        "0"
      )

      .from(
        ".BYAKUYA3",
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
        className={`w-full h-screen bg-[#FDFDFD] relative ${!isActive ? "hidden" : ""
          }`}
      >
        <CenterText text="PARTIR" color="#FF69B4" rotation={4} />

        <div className="VOGUE-BYAKUYA flex justify-center">
          <h1 className='font-["Vogue"] text-[32vw] text-[#FF69B4] leading-none inline-block'>
            VOGUE
          </h1>
        </div>

        <div className="IMAGES">
          
          <img
            src={Byakuya1}
            alt="Byakuya1"
            className="BYAKUYA1 h-screen absolute z-30 top-0 right-0 object-cover"
          />
          
          
          <img
            src={Byakuya2}
            alt="Byakuya2"
            className="BYAKUYA2 absolute left-0 bottom-0 w-[35vw] z-40"
          />
          
          
          <img
            src={Byakuya3}
            alt="Byakuya3"
            className="BYAKUYA3 absolute left-1/2 -translate-x-1/2 bottom-10 w-[25vw] z-20 border-8 border-black"
          />
        </div>
      </div>
    </>
  );
};

export default Byakuya;