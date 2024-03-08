import React, { useContext } from "react";
import { useState } from "react";
import { EnergyContext } from "../context/EnergyContext";
import { NodeContext } from "../context/NodeContext";

const AddProfile = () => {
    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [Name, setName] = useState("");
    const [PlantAdress, setPlantAdress] = useState("");
    const [Desc,setDesc] =useState("");
    const [Revenue,setRevenue] =useState(0);
    const [NumberofSolarPannels, setNumberofSolarPannels] = useState(5);
    const {addNode} = useContext(NodeContext);

    const componentDidMount = () => {

        navigator.geolocation.getCurrentPosition(function(position) {
            setLat('' + position.coords.latitude);
            setLong('' + position.coords.longitude);    
          console.log("Latitude is :", position.coords.latitude);    
          console.log("Longitude is :", position.coords.longitude);
    
        });
    
    }

    return (        
        <div className="flex flex-row w-full mt-20 justify-center items-center">            
            <div className="flex flex-col w-1/2 justify-center items-center">
                <div className="text-5xl text-white p-3 font-bold">
                    Let's get you set up
                </div>
                <div className="text-xl text-[#9ca3af] mt-2">
                    Fill out or confirm the below details to match your profile
                </div>
                <div className="text-xl text-[#9ca3af] mb-10">
                    This information would be visible to everyone
                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
                        Name
                    </div>

                    <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
                        <input type="text" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} placeholder={"Enter your Name"} onChange={(e)=> setName(e.target.value)} />                
                    </div>
                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
                        Plant Address
                    </div>

                    <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
                        <input type="text" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} placeholder={"Enter your Plant Address"} onChange={(e)=> setPlantAdress(e.target.value)} />                
                    </div>
                </div>

                <div className="flex flex-row w-full items-center justify-around mt-10 mb-10">

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Lat
                        </div>
                        <div className="rounded-lg blue-glassmorphism w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {Lat}
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Long
                        </div>
                        <div className="rounded-lg blue-glassmorphism w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {Long}
                            </div>
                        </div>
                    </div>

                    <button type="button" onClick={componentDidMount} className="text-white font-bold mt-4 text-xs w-fit items-center px-4 bg-[#097969] py-3 rounded-full cursor-pointer hover:bg-[#064e3b]">
                        Auto Capture
                    </button>

                </div>

                <div className="flex flex-row w-full items-start mt-5 justify-center">
                    <div className="text-2xl text-white mt-5 mr-3 w-1/6 font-bold">
                        Description
                    </div>

                    <div className="rounded-lg w-5/6 mt-5 ml-3">
                        <textarea onChange={(e)=> setDesc(e.target.value)} rows="5" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} placeholder="Enter a small description about yourself">
                            </textarea>             
                    </div>
                </div>
                

                <div className="flex flex-row w-full items-center justify-center">
                    <div className="text-xl text-white mt-5 mr-3 w-4/6 font-bold">
                        Number of solar panels installed
                    </div>

                    <div className="flex flex-row items-center w-2/6">
                        <div className="rounded-lg mt-5">
                            <input type="number" min={2} style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={2}  onChange={(e)=> setNumberofSolarPannels(e.target.value)}/>                
                        </div>                        
                    </div>
                </div>                                                               

                <button type="button" className="text-white mt-10 mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]"
                onClick={(e)=> addNode(Name, PlantAdress,Lat,Long,Revenue,NumberofSolarPannels, Desc)}>
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default AddProfile;