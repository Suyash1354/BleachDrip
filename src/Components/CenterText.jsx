  import React from "react";

  const CenterText = ({text,color,rotation}) => {
    return (
      <>
        <div className=" CENTER-TEXT w-[110vw] h-screen flex items-center justify-center absolute top-0 left-[-5vw] z-100"
        style={{rotate:`${rotation}deg`}}
        >
          <div className="bg-black w-[110vw] flex items-center justify-center text-white font-['Vogue'] text-[3.2vw] h-[4vh] sm:h-[6vh] lg:h-[6vh] ">
            <h1 className="leading-none py-2 glow-text">{text}</h1>
          </div>
              <h1 className="text-[4vw] opacity-80 font-[PerfectoCalligraphy] absolute z-80"
              style={{color:color}}
              >{text}</h1>
        </div>
      </>
    );
  };

  export default CenterText;
