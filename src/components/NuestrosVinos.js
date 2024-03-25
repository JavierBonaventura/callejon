import React, { useState, useEffect, useRef } from "react";

import fondoVinos from "../images/fondoVinos.png";
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function NuestrosVinos() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [mainImage, setMainImage] = useState(2);

  const [distancia, setDistancia] = useState(0);
  const [distancia2, setDistancia2] = useState(0);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  let distanciaEntre1y2 = 0;
  let distanciaEntre2y3 = 0;

  useEffect(() => {
    const div1Rect = div1Ref.current.getBoundingClientRect();
    const div2Rect = div2Ref.current.getBoundingClientRect();
    const div3Rect = div3Ref.current.getBoundingClientRect();

    distanciaEntre1y2 =
      div2Rect.left +
      div2Rect.width / 2 -
      (div1Rect.right - div1Rect.width / 2);
    distanciaEntre2y3 =
      div3Rect.left +
      div3Rect.width / 2 -
      (div2Rect.right - div2Rect.width / 2);

    setDistancia(distanciaEntre1y2);
    setDistancia2(distanciaEntre2y3);
  }, []);

  const offsetChange = distancia2 - 5;

  const moveLeft = () => {
    if (mainImage == 2) {
      setOffset3(offset3 - offsetChange);
      setOffset2(offset2 - offsetChange);
      setOffset1(offset1 + offsetChange * 2);
    }
    if (mainImage == 1) {
      setOffset3(offset3 + offsetChange * 2);
      setOffset2(offset2 - offsetChange);
      setOffset1(offset1 - offsetChange);
    }
    if (mainImage == 3) {
      setOffset3(offset3 - offsetChange);
      setOffset1(offset1 - offsetChange);
      setOffset2(offset2 + offsetChange * 2);
    }

    switch (mainImage) {
      case 2:
        setMainImage(3);
        break;
      case 1:
        setMainImage(2);
        break;
      case 3:
        setMainImage(1);
        break;
      default:
        // Puedes manejar el caso en que mainImage no sea 1, 2 o 3, si es necesario.
        break;
    }
  };

  const moveRight = () => {
    if (mainImage == 2) {
      setOffset3(offset3 - offsetChange * 2);
      setOffset2(offset2 + offsetChange);
      setOffset1(offset1 + offsetChange);
    }
    if (mainImage == 1) {
      setOffset3(offset3 + offsetChange);
      setOffset2(offset2 - offsetChange * 2);
      setOffset1(offset1 + offsetChange);
    }
    if (mainImage == 3) {
      setOffset3(offset3 + offsetChange);
      setOffset1(offset1 - offsetChange * 2);
      setOffset2(offset2 + offsetChange);
    }

    switch (mainImage) {
      case 2:
        setMainImage(1);
        break;
      case 1:
        setMainImage(3);
        break;
      case 3:
        setMainImage(2);
        break;
      default:
        // Puedes manejar el caso en que mainImage no sea 1, 2 o 3, si es necesario.
        break;
    }
  };

  const imageStyle1 = {
    transform: `translateX(${offset1}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  const imageStyle2 = {
    transform: `translateX(${offset2}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  const imageStyle3 = {
    transform: `translateX(${offset3}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
  };

  return (
    <div
      className="hidden lg:block w-full  bg-cover bg-center relative overflow-hidden "
      style={{ backgroundImage: `url(${fondoVinos})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-16">
        <div className="relative z-10 ">
          <h1 className="texto-vinos text-black font-black ">VINOS</h1>
        </div>
        <div className="flex justify-between">
          <div className=" relative ">
            <div
              className={`cursor-pointer z-10 h-14 w-14 rounded-full flex items-center justify-center absolute top-1/2  hover:bg-[#460377] ${
                mainImage === 3 ? "bg-transparent" : "bg-transparent"
              } transition-background duration-500`}
              onClick={moveLeft}
            >
              <img
                src={flechaIzquierda}
                alt="Flecha Izquierda"
                className="h-6 w-3.5"
              />
            </div>
          </div>
          <div
            className="flex justify-between w-7/12 h-[650px] py-24  "
            id="caja"
          >
            <div
              className="  z-10 flex flex-col items-center  "
              style={imageStyle1}
              id="div1"
              ref={div1Ref}
            >
              <img
                className="h-1/3"
                src={vino1}
                alt="Vino 1"
                style={{
                  height: mainImage === 1 ? "489px" : "417px",
                  marginTop: mainImage === 1 ? "-40px" : "0",
                  transition:
                    "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",
                }}
              />
              <p className=" mt-16 texto-vinos-botellas">malbec</p>
            </div>

            <div
              className=" z-10 flex flex-col items-center "
              style={imageStyle2}
              id="div2"
              ref={div2Ref}
            >
              <img
                className="h-1/3"
                src={vino2}
                alt="Vino 2"
                style={{
                  height: mainImage === 2 ? "489px" : "417px",
                  marginTop: mainImage === 2 ? "-40px" : "0",
                  transition:
                    "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",
                }}
              />
              <div className="flex flex-col items-center flex-shrink-0 w-1/2 justify-center">
                <p className=" mt-16 texto-vinos-botellas">
                  cabernet sauvignon
                </p>
              </div>
            </div>
            <div
              className="  z-10 flex flex-col items-center "
              style={imageStyle3}
              id="div3"
              ref={div3Ref}
            >
              <img
                className="h-1/3"
                src={vino3}
                alt="Vino 3"
                style={{
                  height: mainImage === 3 ? "489px" : "417px",
                  marginTop: mainImage === 3 ? "-40px" : "0",
                  transition:
                    "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",
                }}
              />
              <p className=" mt-16 texto-vinos-botellas">malbec</p>
            </div>
          </div>
          <div className="relative ">
            <div
              className={`cursor-pointer z-10 h-14 w-14 rounded-full flex items-center justify-center absolute top-1/2 right-0 hover:bg-[#460377] ${
                mainImage === 1 ? "bg-transparent" : "bg-transparent"
              } transition-background duration-500`}
              onClick={moveRight}
            >
              <img
                src={flechaDerecha}
                alt="Flecha Izquierda"
                className="h-6 w-3.5"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex justify-center items-center z-10  flex-shrink-0 border border-white relative flex-col  hover:bg-[#460377] hover:cursor-pointer  transition-all ease-in-out duration-300 px-12 py-3">
            <p className="text-ver-mas text-white">ver más</p>
          </div>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinos;
