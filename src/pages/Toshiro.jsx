import gsap from "gsap";
import Toshiro1 from "../../public/images/Toshiro/Toshiro1.png";
import Toshiro2 from "../../public/images/Toshiro/Toshiro2.png";
import Toshiro3 from "../../public/images/Toshiro/Toshiro3.jpg";
import { useGSAP } from "@gsap/react";
import CenterText from "../Components/CenterText";

    const Toshiro = ({ isActive }) => {
    useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline();

    tl.from(".VOGUETOSHIRO", {
      x: -800,
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

    tl.from(".Toshiro1", {
      x: -800,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");

    tl.from(".Toshiro2", {
      x: 400,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");

    tl.from(".Toshiro3", {
      y: 800,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }, "0");
  }, [isActive]);

    return (
        <>
        <div className={`w-full h-screen bg-[#FBFBFB] relative overflow-hidden ${!isActive ? 'hidden' : ''}`}>

          <CenterText text="COURIR" color="#58ABFA" rotation={0} />
          
            <div className="VOGUETOSHIRO flex justify-start ml-6 mt-16 relative z-10">
            <h1 className='font-["Vogue"] text-[22vw] text-[#58ABFA] leading-none inline-block'>
                VOGUE
            </h1>
            </div>

            <div className="IMAGES">
            <img
                src={Toshiro1}
                alt="Toshiro1"
                className="Toshiro1 w-[26vw] h-[80vh] object-cover absolute z-50 top-20 left-4 drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)]  "
            />
            <img
                src={Toshiro3}
                alt="Toshiro2"
                className="Toshiro2 absolute right-8 top-8 w-[26vw] z-50 border-8 border-black "
            />
            <img
                src={Toshiro2}
                alt="Toshiro3"
                className="Toshiro3 w-[25vw] h-[80vh] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 z-10   "
            />
            </div>
        </div>
        </>
    );
    };

export default Toshiro;
