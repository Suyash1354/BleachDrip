import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CenterText from "../Components/CenterText";

const FirstWhite = ({ isActive }) => {
  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline();
    tl.from(".CENTER-TEXT", {
      x: -2000,
      duration: 1,
      ease: "power2.out",
    });
  }, [isActive]);

  return (
    <>
      <div
      
        className={`w-full h-screen bg-[#ffffff] relative ${
          !isActive ? "hidden" : ""
        }`}
      >
        {/* Center Text Animation */}
            <CenterText text="COURIR" color="#FEB001" rotation={0} />
      </div>
    </>
  );
};

export default FirstWhite;
