import { useContext, useState } from "react";
import { EnergyContext } from "../context/EnergyContext";


const Sell = () => {

    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [SenderName, setSenderName] = useState("Rama Krishnan");
    const [PlantAdress, setPlantAdress] = useState("F-265, Ria Nagar, Bangalore 570001 Karnataka");
    const [Desc,setDesc] =useState("");
    const [Units, setUnits] = useState(20);
    const [PricePerUnit, setPricePerUnit] = useState(6);
    const {handlecount,sendEnergy,CurrentAccount}=useContext(EnergyContext);
    

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
                    Want to sell energy?
                </div>
                <div className="text-xl text-[#9ca3af] p-3 mb-10">
                    Fill out or confirm the below details to become a provider of energy
                </div>s

                <div className="flex flex-row w-full items-center justify-center">
        <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
             Name
        </div>

        <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
            <input type="text" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={"Rama Krishnan"} onChange={(e)=> setSenderName(e.target.value)} />                
        </div>
    </div>

    <div className="flex flex-row w-full items-center justify-center">
        <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
             Plant Address
        </div>

        <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
            <input type="text" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={"F-265, Ria Nagar, Bangalore 570001 Karnataka"} onChange={(e)=> setPlantAdress(e.target.value)} />                
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
                

                <div className="flex flex-row w-full items-center justify-center">
        <div className="text-xl text-white mt-3 mr-3 w-4/6 font-bold">
            Units
        </div>

        <div className="flex flex-row items-center w-2/6">
            <div className="rounded-lg mt-5">
                <input type="number" min={20} style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={20}  onChange={(e)=> setUnits(e.target.value)}/>                
            </div>

            <div className="text-xl text-white mt-3 mr-3 ml-3">
                KWH
            </div>
        </div>
    </div>
               

                <div className="flex flex-row w-full items-center justify-center">
                    <div className="flex flex-col mt-3 mr-3 w-4/6">
                        <div className="text-xl text-white font-bold">
                            Est. Price per unit
                        </div>
                        <h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>
                    </div>

                    <div className="flex flex-row items-center w-2/6">
                        <div className="rounded-lg mt-5">
                            <input type="number" min="6" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" onChange={(e)=> setPricePerUnit(e.target.value)}/>                
                        </div>

                        <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                    </div>
                </div>
                                

                <div className="flex flex-row w-full items-start mt-5 justify-center">
                    <div className="text-2xl text-white mt-5 mr-3 w-1/6 font-bold">
                        Description
                    </div>

                    <div className="rounded-lg w-5/6 mt-5 ml-3">
                        <textarea onChange={(e)=> setDesc(e.target.value)} rows="5" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} placeholder="Enter some description">
                            </textarea>             
                    </div>
                </div>

                <button type="button" className="text-white mt-10 mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]"
                onClick={(e)=> sendEnergy(SenderName, PlantAdress,Lat,Long,Units,PricePerUnit,Desc)}
                >
                    Confirm and sell
                </button>
            </div>

                
        </div>
    );
}

export default Sell;