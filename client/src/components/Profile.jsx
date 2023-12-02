import NavBar from "./NavBar";
import React, {useState} from "react";
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
    return ( 
        <div className="min-h-screen">     
        <div className="gradient-bg-welcome" style={{width: "100%", display: "grid", placeItems: "center"}}>
            <NavBar />
            <div className="border-2 border-sky-500 flex justify-start py-10 rounded-lg mx-2 my-10 px-12" style={{height: "auto", width: "60%", boxShadow: '0px 0px 50px -7px rgba(25,116,223,0.75)', background: "rgba(38, 38, 42,0.6)"}}>
            <div className="flex flex-col w-[430px]">
                <div className="flex flex-row">
                    
                <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" style={{borderRadius: "50%", height: "200px", width: "200px"}}/>
                <div className="flex flex-col">
                    
                <input className="text-white text-3xl font-bold font-sans mx-4 mt-11 bg-transparent blue-glassmorphism" type="text" placeholder="Jane Doe" />
                <input className="text-white text-left text-xl font-light px-4 my-7 ml-4 bg-transparent blue-glassmorphism" type="text" placeholder="#1234, Ria Nagar, Bangalore 570001 Karnataka, India" style={{width: "130%"}}/>
                </div>
                </div>
                <div className="my-5" style={{width: "40px", height:"2px", background: "rgb(25,116,223)", marginLeft: "90%"}}></div>
                <div className="text-white text-xl font-bold font-sans mx-2 mb-2 mr-2">Description</div>
                <textarea className="bg-transparent blue-glassmorphism mb-5 text-white" cols="70" rows="8" placeholder="Enter some description..." style={{width: "190%"}}></textarea>
                <div className="flex flex-row justify-between" style={{width: "190%"}}>
                <div className="flex flex-row justify-between">
                <div className="text-white text-xl font-bold font-sans mx-2 mt-3 mr-2">
                    Latitude
                </div>
                <input className="blue-glassmorphism bg-transparent my-1 text-white text-muted" type="number" min="0"  id="latitude" name="latitude" value={latitude} readOnly style={{width: "200px"}}/>
                </div>
                <div className="flex flex-row justify-between">
                <div className="text-white text-xl font-bold font-sans mt-3 mr-2" >
                    Longitude
                </div>
                <input className="blue-glassmorphism bg-transparent my-1 text-white text-muted" type="number" min="0"  id="longitude" name="longitude" value={longitude} readOnly style={{width: "200px"}}/>
                </div>
                <button className="text-white font-bold mt-1 text-s w-fit items-center px-4 bg-[#097969] py-3 rounded-full cursor-pointer hover:bg-[#064e3b]" type="button" onClick={geolocate}>Auto Capture</button>
                </div>
                <div className="flex flex-row justify-around my-3 mx-2" style={{width: "190%"}}>
                <div className="text-white text-xl font-bold font-sans mt-3 mr-2" >
                    No. of Solar Panels 
                </div>
                <input className="blue-glassmorphism bg-transparent my-1 text-white text-muted" type="number" placeholder="0" style={{width: "350px"}}/>
                </div>
                {/* place for graph*/}
                <div className="flex flex-row w-full items-center justify-center"  style={{width: "190%"}}>
                    <div className="flex flex-col mt-3 mr-3 w-4/6">
                        <div className="text-xl text-white font-bold">
                            Est. Profit for the Overall Sales
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <div className="bg-transparent mt-5">
                            <input className="blue-glassmorphism" type="number" min="8" style={{border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                        </div>
                        
                        <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-between" style={{width: "62%"}}>
            <div></div>
            <button className="text-white font-bold mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">Save Changes</button>
            </div>
        </div>  
        </div>       
    );
}

export default Profile;
