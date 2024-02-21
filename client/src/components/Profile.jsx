import { NodeContext } from "../context/NodeContext";
import NavBar from "./NavBar";
import React, {useContext, useState} from "react";
const Profile = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const geolocate = ()=>{
        navigator.geolocation.getCurrentPosition(
            function(position){
                const lat=position.coords.latitude;
                const long=position.coords.longitude;
                setLatitude(lat);
                setLongitude(long);
            }
        );
    }

    const {handlecount,addNode} = useContext(NodeContext);
    return (  

        
        <div className="min-h-screen" style={{width: "100%", display: "grid", placeItems: "center"}}>
            {/* <NavBar /> */}
            <button onClick={(e)=> addNode()}>Add Node</button>
            <button onClick={(e) => handlecount()}>Show Profiles</button>
            <div className="border-2 border-sky-500 flex justify-start py-10 rounded-lg mx-2 my-10 px-12" style={{height: "auto", width: "60%", boxShadow: '0px 0px 50px -7px rgba(25,116,223,0.75)', background: "rgba(38, 38, 42,0.6)"}}>
            <div className="flex flex-col w-[430px] w-full">
                <div className="flex flex-row">
                    
                <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" style={{borderRadius: "50%", height: "150px", width: "150px"}}/>
                <div className="flex flex-col">
                    
                <input className="text-white text-3xl font-bold font-sans mx-4 mt-5 bg-transparent blue-glassmorphism" type="text" defaultValue="Jane Doe" />
                <input className="text-white text-left text-xl font-light px-4 my-7 ml-4 bg-transparent blue-glassmorphism" type="text" defaultValue="#1234, Ria Nagar, Bangalore 570001 Karnataka, India" style={{width: "130%"}}/>
                </div>
                </div>
                <div className="my-5" style={{width: "40px", height:"2px", background: "rgb(25,116,223)", marginLeft: "50%"}}></div>

                <div className="flex flex-row w-full items-center justify-center mb-10"  style={{width: "100%"}}>
                    <div className="mt-3 mr-3 w-4/6">
                        <div className="text-xl text-white font-bold">
                            Est. Revnue generated from the Overall Sales
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="bg-[#097969] rounded-lg mt-3 p-3">
                            <div className="text-white font-bold text-xl">
                                7000000
                            </div>
                            {/*
                            <input className="blue-glassmorphism" type="number" min="8" style={{border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                            */}
                        </div>
                        
                        <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                    </div>
                </div>
                


                <div className="text-white text-xl font-bold font-sans mx-2 mb-2 mr-2">Description</div>
                <textarea className="bg-transparent blue-glassmorphism mb-5 text-white" cols="8" rows="8" placeholder="Enter some description..." style={{width: "100%"}}></textarea>
                
                <div className="flex flex-row w-full items-center justify-around mt-10 mb-10">

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Lat
                        </div>
                        <div className="rounded-lg bg-[#26262a] w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {latitude}
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Long
                        </div>
                        <div className="rounded-lg bg-[#26262a] w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {longitude}
                            </div>
                        </div>
                    </div>

                    <button type="button" className="text-white font-bold mt-4 text-xs w-fit items-center px-4 bg-[#097969] py-3 rounded-full cursor-pointer hover:bg-[#064e3b]">
                        Auto Capture
                    </button>

                </div>
                
                <div className="flex flex-row justify-around my-3 mx-2 mt-10" style={{width: "100%"}}>
                <div className="text-white text-xl font-bold font-sans mt-3 mr-2" >
                    Number of Solar Panels installed
                </div>

                <input className="blue-glassmorphism bg-transparent my-1 text-white text-muted" type="number" placeholder="0" style={{width: "350px"}}/>
                </div>
                {/* place for graph*/}
                </div>
            </div>
            <div className="flex flex-row justify-between" style={{width: "62%"}}>
            <div></div>
            <button className="text-white font-bold mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">Save Changes</button>
            </div>
        </div>         
    );
}

export default Profile;
