import { BuyContext } from "../context/BuyContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import './Loader.css'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { EnergyContext } from "../context/EnergyContext";
import { NodeContext } from "../context/NodeContext";
import Loader from "./Loader";

const MoreInfo = () => {
    const {buyEnergy}=useContext(BuyContext);
    const {handlecount,Providers,updateVals}=useContext(EnergyContext);
    const {handlenodecount,CurrentAccount, EnergyProviders,updateNode} = useContext(NodeContext);
    const [NumberofSolarPannels, setNumberofSolarPannels] = useState(0);
    const [Color,setColor]=useState("green");
    const [Desc,setDesc] =useState("");
    const [Loading, setLoading] = useState(true);
    const data = [{name: '2/11/2023', energy: 0}, {name: '2/12/2023', energy: 250}, {name: '3/12/2023', energy: 200}, {name: '4/12/2023', energy: 100}];
    const [Index, setIndex] = useState(-1);
    const [NodeIndex, setNodeIndex] = useState(-1);
    const [CarbonFootPrint, setCarbonFootPrint] = useState(-1);


    // buyEnergy(SellerAddress, SellerName,SellerPlantAdress,SellerLat,SellerLong,Units,PricePerUnit);

    const location = useLocation();
    const [locState, setLocState] = useState({selleraddr: '', name: '', plant: '', energy: '', price: '', lat: '', long: '', dist: '', desc: ''})

    useEffect(() => {
        console.log(location.state)        
        if(location.state){            
            setLocState(location.state);
           
        } 
        handlecount();
        if(typeof Providers[0] === 'undefined' || Providers[0] === null){
            console.log("wait");
        }
        else
        setProviderState();

        handlenodecount();
        if(typeof EnergyProviders[0] === 'undefined' || EnergyProviders[0] === null){
            console.log("wait");
        }
        else{
        setEnergyProviderState();
        setLoading(false);
        if(CarbonFootPrint <= 30)
        setColor('green');
        else if(CarbonFootPrint > 30 && CarbonFootPrint <= 100)
        setColor("yellow");
        else
        setColor("red");
        
        }  
    });


    const setProviderState = () =>{
        Object.values(Providers[0]).map((x)=>{
            if ( locState.selleraddr.toUpperCase() === x[0].toUpperCase() ){
                setIndex(Object.keys(Providers[0]).find(key => Providers[0][key] === x));
            }
              
        })
        console.log(Index);
    }

    const setEnergyProviderState = () =>{
        Object.values(EnergyProviders[0]).map((x)=>{
            if ( locState.selleraddr.toUpperCase() === x[0].toUpperCase() ){
                
                setNodeIndex(Object.keys(EnergyProviders[0]).find(key => EnergyProviders[0][key] === x));
                setNumberofSolarPannels(parseInt(x[6]['_hex']))
                setCarbonFootPrint(parseInt(x[8]['_hex']));
                setDesc(x[7]);
            }
              
        })
        console.log("Node Index = > " + NodeIndex);
    }

    const handleClick = () =>{
         buyEnergy(locState,Units);
         updateVals(locState,Units,Index)
         updateNode(locState,NumberofSolarPannels,Desc,Units,locState.price,NodeIndex,CarbonFootPrint)

    }
    const [Units, setUnits] = useState(locState.energy);

    return (        
        <div className="flex flex-row w-full mt-20 justify-center items-center">
            <div className="flex flex-col w-1/2">
                
                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6">
                    <div className="w-1/6">
                        <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" resizeMode={"cover"} style={{width: 100, height: 100, display: "block", borderRadius: "50%"}}/>
                    </div>

                    <div className="flex flex-col w-5/6 p-2">  
                        <div className="flex flex-row">
                            <div className="text-white font-bold text-2xl mr-2">
                                {locState.name} 
                            </div>
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
                     {Loading ?
                     <div style={{position: 'relative', right: '55px'}}>
                        <div class="loader" ></div>
                     </div>
                     

                    :
                                         
                    <div className="flex flex-row items-center">
                        <div className="bg-[#097969] rounded-lg mt-3 p-3 m-3">
                            <div className="text-white font-bold text-xl">
                                {CarbonFootPrint} 
                            </div>
                            {/*
                            <input className="blue-glassmorphism" type="number" min="8" style={{border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                            */}
                        </div>
                        
                        <div className="text-xl text-white mb-1 mr-3 ml-3">
                            <EnergySavingsLeafIcon  style={{color: Color , fontSize: '60px'}} fontSize="large"></EnergySavingsLeafIcon>
                        </div>
                    </div>

                    }   

                </div>

                {/* <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="text-white font-bold text-xl w-4/6">
                        Number of solar panels installed
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg blue-glassmorphism justify-center items-center w-fit px-3 py-1">
                        10
                    </div>              
                </div> */}

                {/* <div className="flex flex-row w-full rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="flex flex-col w-full p-2 justify-center items-cener">                        
                        <div className="text-white font-bold text-xl mb-10 justify-left">
                            Energy history
                        </div>  
                        <LineChart width={650} height={300} data={data}>
                            <Line type="monotone" dataKey="energy" stroke="#8884d8" />
                            <CartesianGrid stroke=" #566573" strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#b3b6b7" label='Dates' fontSize={10} padding={{left: 30, right: 30}}/>
                            <Tooltip />
                            <Legend />
                            <YAxis stroke="#b3b6b7" label='KWH' fontSize={10}/>
                        </LineChart>                      
                    </div>            
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg blue-glassmorphism p-6 mt-3">                
                    <div className="text-white font-bold text-xl w-4/6">
                        Total Revenue generated
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg blue-glassmorphism justify-center items-center w-fit px-3 py-1">
                        1000000₹
                    </div>              
                </div> */}

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

                                {/*<h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>*/}
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
                                        setUnits(e.target.value);
                                        
                                        }} step={2} type="number" min={5} max={locState.energy} className="blue-glassmorphism" style={{ border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={locState.energy} />                
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
                                        {(Units != 0) ? Units*locState.price : locState.energy*locState.price}
                                </div>

                                <div className="text-xl text-white mt-3 mr-3 ml-3 items-center mt-5">
                                    ₹
                                </div>
                            </div>
                        </div>                         

                    </div>
                </div>

                
                <div className="flex flex-row w-full items-end justify-center">
                    <button type="button"
                    className="text-white mt-10 mb-10 text-l w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]"                     
                    onClick={(e) => handleClick()}
                    >
                        Confirm and buy
                    </button>
                </div>
                    
            </div>
        </div>
                
        
    );
}

export default MoreInfo;