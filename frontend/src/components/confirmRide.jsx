import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 ">
        <i
          className="text-3xl text-gray-300 ri-arrow-down-wide-line"
          onClick={() => {
            props.setConfirmRidePanel(false);
          }}
        ></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                kankariya talab Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
          <i className="text-lg ri-square-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                kankariya talab Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
          <i className="text-lg ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹193.34</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Pay Online
              </p>
            </div>
          </div>

        </div>
        <button onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);

        }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
