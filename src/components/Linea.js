import React, { useEffect } from "react";
import fondoLinea from "../images/fondoNuevaLinea.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Linea() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.38)",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div className="bg-[#252323] py-8">
      <div
        className="w-full bg-cover bg-center lg:bg-bottom relative"
        style={{ backgroundImage: `url(${fondoLinea})` }}
      >
        <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-28 space-y-5">
          <div className="text-center relative z-10  flex justify-center">
            <h1
              className="text-white text-3xl lg:text-6xl lg:leading-[70px] tracking-[-1px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
              style={gothamBlack}
            >
              NUEVA LÍNEA RASPÓN
            </h1>
          </div>
        </div>
        <div className="z-0" style={overlayStyle}></div>
      </div>
    </div>
  );
}

export default Linea;
