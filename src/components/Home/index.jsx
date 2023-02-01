import React from "react";
import img from "../../assets/Image.png";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className=" items-center">
          <div className="py-4 m-10 ">
            <p className="text-[#ea580c] font-bold ">
              Best Destinations around the world
            </p>
            <h1 className="font-volkhov text-7xl  font-bold">
              Travel, enjoy and live a new and full life
            </h1>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex">
              <div>
                <button className=" bg-[#F1A501] shadow-lg shadow-[#ac7707]-500/50 p-4 m-4 rounded-lg text-[#f8fafc] cursor-pointer hover:p-3 hover:m-5">
                  Find out more
                </button>
              </div>
              <div>
                <button className=" bg-[#DF6951] shadow-lg shadow-[#924535]-500/50 p-4 m-4 rounded-full text-[#f8fafc] cursor-pointer hover:p-3 hover:m-5">
                  <p>Play Demo</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img} alt="img" />
        </div>
      </div>
     
    </>
  );
}
