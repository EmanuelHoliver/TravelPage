import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

export default function Category() {
  return (
    <>
      <div className="flex justify-center text-center">
        <div>
          <h5 className="font-volkhov font-semibold ">CATEGORY</h5>
          <div>
            <h1 className="text-7xl font-medium">We Offer Best Services</h1>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 place-content-center">
        <div className="w-full p-4 lg:w-50 ">
          <div className="p-8 bg-white rounded shadow-md shadow-[#FFF1DA]-500/50">
            <img className="w-30" src={img1} alt="img" />
            <h5 className="text-2xl font-bold text-gray-800">
              Calculated Weather
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              reiciendis expedita!
            </p>
          </div>
        </div>
        <div className="w-full p-4 lg:w-50 ">
          <div className="p-8 bg-white rounded shadow-md shadow-[#FFF1DA]-500/50">
            <img className="w-30" src={img2} alt="img" />
            <h5 className="text-2xl font-bold text-gray-800">
              Calculated Weather
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              reiciendis expedita!
            </p>
          </div>
        </div>
        <div className="w-full p-4 lg:w-50 ">
          <div className="p-8 bg-white rounded shadow-md shadow-[#FFF1DA]-500/50">
            <img className="w-30" src={img3} alt="img" />
            <h5 className="text-2xl font-bold text-gray-800">
              Calculated Weather
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              reiciendis expedita!
            </p>
          </div>
        </div>
        <div className="w-full p-4 lg:w-50 ">
          <div className="p-8 bg-white rounded shadow-md shadow-[#FFF1DA]-500/50">
            <img className="w-30" src={img4} alt="img" />
            <h5 className="text-2xl font-bold text-gray-800">
              Calculated Weather
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              reiciendis expedita!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
