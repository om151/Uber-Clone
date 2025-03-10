import React from "react";

const LocationSearchPanel = (props) => {



  // sample array for locarion 

  const locations = [
    "Mp-68 wale, plot No.110 , Indrapuri sector c",
    "248, Near kapoors cafe, Sheriyansh Coading School, Bhopal",
    "12 B , Db mall , MP Nagar , Bhopal",
  ];
  return (
    <div>
     {/* this is just a sample data */}
     {
      locations.map(function(elem,idx){
        return(
          <div key={idx} onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2">
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-fill"></i></h2>
          <h4 className="font-medium">{elem}</h4>
         </div>
        )
      })
     }

     

    </div>
  );
}

export default LocationSearchPanel;