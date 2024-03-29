import React from "react";
import barriles from "../images/barriles.png";

const gothamBlack = {
  fontFamily: "Gotham Black",
};

function Vision() {
  return (
    <div className="bg-[#252323] py-20 lg:py-28 ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-32">
        <div
          className="text-center relative z-10 w-full lg:w-2/5 flex flex-col justify-between gap-y-5 lg:gap-y-0"
          id="izquierdo"
        >
          <h1
            className="text-white text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase text-start"
            style={gothamBlack}
          >
            Visión de la empresa
          </h1>
          <p className="text-left text-lg leading-[28px] font-gotham text-white">
            Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del
            volcán Tupungato, una de las montañas más importantes de la
            cordillera de los Andes.
          </p>
          <div className="flex">
            <div className="inline-block mr-auto z-10">
              <a
                href=""
                className="border border-white text-white px-10 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
              >
                CONOCER MÁS
              </a>
            </div>
          </div>
        </div>
        <div id="derecho" className="w-full lg:w-2/5  ml-auto  ">
          <img className="shadow-2xl" src={barriles} alt="Barriles" />
        </div>
      </div>
    </div>
  );
}

export default Vision;
