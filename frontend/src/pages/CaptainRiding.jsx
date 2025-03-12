import { useGSAP } from "@gsap/react";
import React, { useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FinishRide from "../components/finishRide";


const CaptainRiding = () => {

    const [finishRidePanel , setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePanel]
      );


    return (
        <div className="h-screen">
             
        <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <Link
            to="/captain-home"
            div
            className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-4/5">
          <img
            className="h-full w-full object-cover"
            src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
            alt=""
          />
        </div>

        <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400" onClick={() => {
            setFinishRidePanel(true);
        }}>
        <h5 className="p-1 text-center w-[95%] absolute top-0 ">
        <i
          className="text-3xl text-gray-800 ri-arrow-up-wide-line"
          onClick={() => {
           
          }}
        ></i>
      </h5>
        <h4 className="text-xl font-semibold ">4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete ride</button>
        </div>
  
        <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full  py-6 px-3 bg-white pt-12">
      <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
  
        
  
      </div>
    )
}

export default CaptainRiding;