import gsap from "gsap";
import Rukia1 from "../../public/images/Rukia/Rukia1.png";
import Rukia2 from "../../public/images/Rukia/Rukia2.png";
import Rukia3 from "../../public/images/Rukia/Rukia3.jpg";
import { useGSAP } from "@gsap/react";
import CenterText from "../Components/CenterText";

const Rukia = ({ isActive }) => {
    useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline();

    tl.from(".VOGUERUKIA", {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    tl.from(
        ".CENTER-TEXT",
        {
          x: -2000, 
          duration: 1,
          ease: "power2.out", 
        },
        "0"
      ) 

    tl.from(".Rukia1", {
      x: -800,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");

    tl.from(".Rukia2", {
      x: 400,
      scaleX: 1,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");

    tl.from(".Rukia3", {
      y: 800,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");
  }, [isActive]);

  return (
    <>
      <div className={`w-full h-screen bg-[#FBFBFB] relative overflow-hidden ${!isActive ? 'hidden' : ''}`}>

            <CenterText text="MOURIR" color="#EE8ABA" rotation={-2} />
            
        <div className="VOGUERUKIA flex justify-end mr-6 relative z-30">
          <h1 className='font-["Vogue"] text-[22vw] text-[#EE8ABA] leading-none inline-block'>
            VOGUE
          </h1>
        </div>

        <div className="IMAGES">
          <img
            src={Rukia3}
            alt="Rukia1"
            className="Rukia1 w-[26vw] h-[80vh] object-cover absolute z-50 top-20 left-4 border-8 border-black "
          />
          <img
            src={Rukia2}
            alt="Rukia2"
            className="Rukia2 absolute right-0 bottom-0 w-[30vw] z-50 scale-x-[-1] drop-shadow-[12px_15px_0px_rgba(0,0,0,0.2)]"
          />
          <img
            src={Rukia1}
            alt="Rukia3"
            className="Rukia3 w-[25vw] h-[80vh] object-cover absolute top-10 left-1/2 -translate-x-1/2 z-10 drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>
    </>
  );
};

export default Rukia;
