import React from "react";
import Ret1 from "../../assets/Rectangle1.png";
import Ret2 from "../../assets/Rectangle2.jpg";
import Ret3 from "../../assets/Rectangle3.jpg";
import Nav from "../../assets/navigation.png";
export default function TopD() {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <div className="grid grid-cols-1  place-content-center">
          <div className="  font-medium  text-center mt-8">
            <h5>Top Selling</h5>
          </div>
          <div className="font-volkhov font-semibold text-center text-7xl mb-8">
            <h1>Top Destinations</h1>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4 m-4  place-content-center">
          <div className="max-w-xs  mx-4 mb-2  rounded-lg shadow-lg ">
            <img
              className="w-full h-[12rem] rounded-t-lg  "
              src={Ret1}
              alt="img"
            />
            <div className="flex justify-between font-volkhov font-medium m-4">
              <p>Rome, Italy</p>
              <p>$5,42k</p>
            </div>
            <div className="flex justify-start m-4">
              <img src={Nav} alt="img" />
              <p>10 Days Trip</p>
            </div>
          </div>
          <div className="max-w-xs  mx-4 mb-2  rounded-lg shadow-lg ">
            <img
              className="w-full h-[12rem] rounded-t-lg "
              src={Ret2}
              alt="img"
            />
            <div className="flex justify-between  m-4">
              <p>London, UK</p>
              <p>$4.2k</p>
            </div>
            <div className="flex justify-start m-4">
              <img src={Nav} alt="img" />
              <p>12 Days Trip</p>
            </div>
          </div>
          <div className="max-w-xs  mx-4 mb-2 mb:w-50 rounded-lg shadow-lg ">
            <img
              className="w-full h-[12rem] rounded-t-lg  "
              src={Ret3}
              alt="img"
            />
            <div className="flex justify-between  m-4">
              <p>Full, Brazil</p>
              <p>$10k</p>
            </div>
            <div className="flex justify-start m-4">
              <img src={Nav} alt="img" />
              <p>10 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
