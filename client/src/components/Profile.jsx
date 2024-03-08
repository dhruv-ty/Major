import { NodeContext } from "../context/NodeContext";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect} from "react";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import Loader from "./Loader";

const Profile = () => {


    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [Name, setName] = useState("");
    const [PlantAdress, setPlantAdress] = useState("");
    const [Desc,setDesc] =useState("");
    const [CarbonFootPrint, setCarbonFootPrint] = useState(0);
    const [Revenue,setRevenue] =useState(0);
    const [Loading, setLoading] = useState(true);
    const [Color,setColor]=useState("green");
    const [NumberofSolarPannels, setNumberofSolarPannels] = useState(0);
    const {handlenodecount,CurrentAccount, EnergyProviders} = useContext(NodeContext);
    const [ValidProvider,setValidProvider] =useState(false);
    


    const geolocate = ()=>{
        navigator.geolocation.getCurrentPosition(
            function(position){
                const lat=position.coords.latitude;
                const long=position.coords.longitude;
                setLat(lat);
                setLong(long);
            }
        );
    }



    useEffect(() => {
        handlenodecount();
        if(typeof EnergyProviders[0] === 'undefined' || EnergyProviders[0] === null){
            console.log("wait");
        }
        else{
        setProviderState();
        setLoading(false);
        }
        console.log(Loading);
        console.log(EnergyProviders);
        if(CarbonFootPrint <= 30)
        setColor('green');
        else if(CarbonFootPrint > 30 && CarbonFootPrint <= 100)
        setColor("yellow");
        else
        setColor("red");
        
    });

    const setProviderState = () =>{
        Object.values(EnergyProviders[0]).map((x)=>{
            if ( CurrentAccount.toUpperCase() === x[0].toUpperCase() ){
                setValidProvider(true);
                setName(x[1]);
                setPlantAdress(x[2]);
                setLat(x[3]);
                setLong(x[4]);
                setRevenue(parseInt(x[5]['_hex']));
                setCarbonFootPrint(parseInt(x[8]['_hex']))
                setNumberofSolarPannels(parseInt(x[6]['_hex']))
                setDesc(x[7]);
            }
            
        })
    }

    return (    
        <div className="min-h-screen" style={{width: "100%", display: "grid", placeItems: "center"}}>
            {/* <NavBar /> */}
            {Loading == true ? 
            <Loader></Loader>
            
            :
            <>
            { ValidProvider==false ?
            <>
             <div className="flex flex-col justify-center items-center" style={{marginBottom: '150px',gap:'50px'}}>
             <div className="text-5xl text-white font-bold" >
                 You Don't Own a Producer Account
             </div>
             <Link to="/AddProfile">
            <button className="text-white font-bold mb-5 text-l w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">Register Now</button>
            </Link>

            </div>
            </>
            :
            <>
            <div className="border-2 border-sky-500 flex justify-start py-10 rounded-lg mx-2 my-10 px-12" style={{height: "auto", width: "60%", boxShadow: '0px 0px 50px -7px rgba(25,116,223,0.75)', background: "rgba(38, 38, 42,0.6)"}}>
            <div className="flex flex-col w-[430px] w-full">
                <div className="flex flex-row">
                    
                <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" style={{borderRadius: "50%", height: "120px", width: "125px"}}/>
                <div className="flex flex-col">
                    
                <input disabled className="text-white text-2xl font-bold font-sans mx-4 mt-2 bg-transparent blue-glassmorphism" type="text" defaultValue={Name} />
                <input disabled className="text-white text-left text-l font-light px-4 my-3 ml-4 bg-transparent blue-glassmorphism" type="text" defaultValue={PlantAdress} style={{width: "130%"}}/>
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
                    <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                        <div className="bg-[#097969] rounded-lg mt-3 p-3">
                            <div className="text-white font-bold text-xl">
                                {Revenue}
                            </div>
                            {/*
                            <input className="blue-glassmorphism" type="number" min="8" style={{border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                            */}
                        </div>
                    
                    </div>
                </div>
                <div className="flex flex-row w-full items-center justify-center mb-10"  style={{width: "100%"}}>
                    <div className="mt-3 mr-3 ">
                        <div className="text-xl text-white font-bold">
                            Carbon Footprint
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="bg-[#097969] rounded-lg mt-3 p-3 m-3">
                            <div className="text-white font-bold text-xl">
                                {CarbonFootPrint} 
                            </div>
                            {/*
                            <input className="blue-glassmorphism" type="number" min="8" style={{border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                            */}
                        </div>
                        
                        <div className="text-xl text-white mt-3 mr-3 ml-3">
                            <EnergySavingsLeafIcon  style={{color: Color , fontSize: '60px'}} fontSize="large"></EnergySavingsLeafIcon>
                        </div>
                    </div>
                </div>


                <div className="text-white text-xl font-bold font-sans mx-2 mb-2 mr-2">Description</div>
                <textarea disabled className="bg-transparent blue-glassmorphism mb-5 text-white" cols="8" rows="5" placeholder={Desc} style={{width: "100%"}}></textarea>
                
                <div className="flex flex-row w-full items-center justify-around mt-5 mb-10">

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Lat
                        </div>
                        <div className="rounded-lg bg-[#26262a] w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-2">
                                {Lat}
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Long
                        </div>
                        <div className="rounded-lg bg-[#26262a] w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-2">
                                {Long}
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="flex flex-row justify-around my-3 mx-2 mt-5" style={{width: "100%"}}>
                <div className="text-white text-xl font-bold font-sans mt-3 mr-2" >
                    Number of Solar Panels installed
                </div>

                <div className="text-white text-xl font-bold font-sans mt-3 mr-2" >
                  {NumberofSolarPannels}
                </div>
                </div>
                {/* place for graph*/}
                </div>
            </div>
            <div className="flex flex-row justify-between" style={{width: "62%"}}>
            <div></div>
            </div>
            </>
        }
           </> }   
        </div>         
    );
}

export default Profile;
