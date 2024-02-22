import { BuyContext } from "../context/BuyContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

const MoreInfo = () => {
    const {buyEnergy}=useContext(BuyContext);
    const [Units, setUnits] = useState(20);
    const [SellerLat, setSellerLat] = useState("");
    const [SellerLong, setSellerLong] = useState("");
    const [SellerAddress, setSellerAddress] = useState("0x6904a7e5497e8270Afd9F9ee46321a9b0A75DB5A");
    const [SellerName, setSellerName] = useState("Rama Krishnan");
    const [SellerPlantAdress, setSellerPlantAdress] = useState("F-265, Ria Nagar, Bangalore 570001 Karnataka");
    const [PricePerUnit, setPricePerUnit] = useState(6);
    const [TotalPrice, setTotalPrice] = useState(0);    

    // buyEnergy(SellerAddress, SellerName,SellerPlantAdress,SellerLat,SellerLong,Units,PricePerUnit);

    const location = useLocation();
    const [locState, setLocState] = useState({name: '', plant: '', energy: '', price: '', lat: '', long: '', dist: ''})

    useEffect(() => {
        console.log(location.state)        
        if(location.state){            
            setLocState(location.state);
        }        
    }, [location])

    return (        
        <div className="flex flex-row w-full mt-20 justify-center items-center">
            <div className="flex flex-col w-1/2">
                
                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6">
                    <div className="w-1/6">
                        <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" resizeMode={"cover"} style={{width: 100, height: 100, display: "block", borderRadius: "50%"}}/>
                    </div>

                    <div className="flex flex-col w-5/6 p-2">                        
                        <div className="text-white font-bold text-2xl">
                            {locState.name}
                        </div>

                        <div className=" text-[#9ca3af] text-xl mt-1">
                            {locState.plant}
                        </div>  

                        <div className=" text-[#9ca3af] text-base mt-2">
                            Distance: {locState.dist}km
                        </div>  

                        <div className=" text-[#9ca3af] text-xs mt-2">
                            Lat: {locState.lat}, Long: {locState.long}
                        </div>                        
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="text-white font-bold text-xl w-4/6">
                        Number of solar panels installed
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg blue-glassmorphism justify-center items-center w-fit px-3 py-1">
                        10
                    </div>              
                </div>

                <div className="flex flex-row w-full rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        <div className="text-white font-bold text-xl">
                            Energy history
                        </div>                        
                    </div>            
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="text-white font-bold text-xl w-4/6">
                        Total Revenue generated
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg blue-glassmorphism justify-center items-center w-fit px-3 py-1">
                        1000000₹
                    </div>              
                </div>

                <div className="text-white font-bold text-3xl items-start justify-start mt-10 mb-5">
                    Buy energy
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6 mt-3">                    
                    <div className="flex flex-col p-2 w-full">                        
                        <div className="text-white font-bold text-xl">
                            Total selling energy
                        </div>

                        <div className="flex flex-row w-full justify-around items-center mt-5">                            
                            <div className="text-white text-2xl font-bold font-sans mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                {locState.energy}KWH
                            </div>                                
                            
                            <div className="text-white text-2xl font-bold">
                                at
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex flex-row items-center">
                                    <div className="text-white text-2xl font-bold font-sans mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                        ₹{locState.price}
                                    </div>

                                    <div className="text-white text-2xl font-bold">
                                        per unit
                                    </div>
                                </div>

                                <h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>
                            </div>
                        </div>   
                    </div>
                </div>

                <div className="flex flex-row w-full rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        <div className="text-white font-bold text-xl">
                            How much do you want to purchase?
                        </div>                        
                    </div>            
                </div>

                <div className="flex flex-row w-full rounded-lg blue-glassmorphism pl-6 pr-6 pb-3 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        
                        <div className="flex flex-row w-full items-center justify-center">
                            <div className="text-xl text-white mr-3 w-4/6 font-bold">
                                Enter amount of energy
                            </div>

                            <div className="flex flex-row items-center w-2/6">
                                <div className="rounded-lg blue-glassmorphism mt-5">
                                    <input onChange={(e) => {
                                        if(e.target.value > locState.energy){                                            
                                            
                                        }else{
                                            setUnits(e.target.value)
                                        }
                                            
                                        }} step={2} type="number" min={5} max={locState.energy} className="blue-glassmorphism" style={{ border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} value={locState.energy} />                
                                </div>

                                <div className="text-xl text-white mt-3 mr-3 ml-3">
                                    KWH
                                </div>
                            </div>
                        </div> 

                        <div className="flex flex-row w-full items-center justify-center">
                            <div className="text-xl text-white mt-3 mr-3 w-4/6 font-bold">
                                Est. price to pay
                            </div>

                            <div className="flex flex-row items-center w-2/6">
                                <div className="text-white text-base font-bold font-sans mt-5 mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                        {Units*locState.price}
                                </div>

                                <div className="text-xl text-white mt-3 mr-3 ml-3 items-center mt-5">
                                    ₹
                                </div>
                            </div>
                        </div>                         

                    </div>
                </div>
                
                <div className="flex flex-row w-full items-end justify-end">
                    <button type="button"
                    className="text-white mt-10 mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]"                     
                    onClick={(e) => buyEnergy(SellerAddress, SellerName,SellerPlantAdress,SellerLat,SellerLong,Units,PricePerUnit)}
                    >
                        Confirm and buy
                    </button>
                </div>
                    
            </div>
        </div>
                
        
    );
}

export default MoreInfo;