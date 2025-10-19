import Ichigo1 from "../../public/images/Ichigo/Ichigo11.png"
import Ichigo2 from "../../public/images/Ichigo/Ichigo22.png"
import Ichigo4 from "../../public/images/Ichigo/Ichigo4.png"
import Ichigo3 from "../../public/images/Ichigo/Ichigo3.jpg"
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Add this import
import gsap from 'gsap'; 


gsap.registerPlugin(ScrollTrigger);

// Ichigo Component
const Ichigo = ({ isActive }) => {
  useGSAP(() => {
    if (!isActive) return;
    
    const tl = gsap.timeline();

    tl.from(".VOGUE-ICHIGO", {
      y: 40,
      scale: 1.1,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    })

    .from(".ICHIGO1", {
      y: 400,
      duration: 1.5,
      scale: 0.9,
      ease: "expo.out",
    }, "0")

    .from(".ICHIGO2", {
      x: 400,
      duration: 1.5,
      scale: 1.1,
      ease: "expo.out",
    }, "0")

    .from(".ICHIGO4", {
      x: -400,
      y: 400,
      rotate: -40,
      duration: 1.5,
      ease: "expo.out",
    }, "0")

    .from(".ICHIGO3", {
      x: -400,
      y: 400,
      rotate: -80,
      duration: 1.5,
      ease: "expo.out",
    }, "0");
  }, [isActive]);

  return (
    <>
    <div className={`w-full h-screen bg-[#FDFDFD] relative ${!isActive ? 'hidden' : ''}`}>
        <div className="VOGUE-ICHIGO flex justify-center">
          <h1 className='font-["Vogue"] text-[32vw] text-[#FEB001] leading-none inline-block'>
            VOGUE
          </h1>
           </div>

          <div className="IMAGES">
            <img src={Ichigo1} alt="Ichigo1" className="ICHIGO1 w-[38vw] absolute z-30 top-20 left-1/2 -translate-x-1/2" />
            <img src={Ichigo2} alt="" className="ICHIGO2 absolute right-0 bottom-0 w-[40vw] z-40  " />
            <img src={Ichigo4} alt="" className="ICHIGO4 absolute left-80 bottom-0 -rotate-[8deg] w-[22vw] z-20  border-6 border-black " />
            <img src={Ichigo3} alt="" className="ICHIGO3 absolute left-20 -bottom-50 -rotate-[20deg] w-[22vw] z-10 border-8 border-black" />
          </div>
       
      </div>
    </>
  );
};

export default Ichigo;