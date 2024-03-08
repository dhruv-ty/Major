import { useContext, useState, useEffect } from "react";
import { EnergyContext } from "../context/EnergyContext";
import { NodeContext } from "../context/NodeContext";
import Loader from "./Loader";


const Sell = () => {

    const [Lat, setLat] = useState("");
    const [Long, setLong] = useState("");
    const [Name, setName] = useState("");
    const [PlantAdress, setPlantAdress] = useState();
    const [Revenue, setRevenue] = useState(0);
    const [Loading, setLoading] = useState(true);
    const [NumberofSolarPannels, setNumberofSolarPannels] = useState(0);
    const [CarbonFootPrint, setCarbonFootPrint] = useState(0);
    const [Nodedesc, setNodedesc] = useState("");
    const [Desc,setDesc] =useState("");
    const [Units, setUnits] = useState(20);
    const [NodeIndex, setNodeIndex] = useState(-1);
    const [PricePerUnit, setPricePerUnit] = useState(6);
    const [ValidProvider,setValidProvider] =useState(false);

    const {sendEnergy,CurrentAccount}=useContext(EnergyContext);
    const {handlenodecount, EnergyProviders,updateCarbonFootPrint} = useContext(NodeContext);
    

    useEffect(() => {
        handlenodecount();
        if(typeof EnergyProviders[0] === 'undefined' || EnergyProviders[0] === null){
            console.log("wait");
        }
        else{
        setProviderState();
        setLoading(false);
        }
        console.log(EnergyProviders);
        
    });

    const setProviderState = () =>{
        Object.values(EnergyProviders[0]).map((x)=>{
            if ( CurrentAccount.toUpperCase() === x[0].toUpperCase() ){
            
                setValidProvider(true);
                setNodeIndex(Object.keys(EnergyProviders[0]).find(key => EnergyProviders[0][key] === x));
                setName(x[1]);
                setPlantAdress(x[2]);
                setLat(x[3]);
                setRevenue(parseInt(x[5]['_hex']))
                setNodedesc(x[7])
                setLong(x[4]);
                setNumberofSolarPannels(parseInt(x[6]['_hex']))
            }
            
        })
    }

const handleclick = ()=>{
    sendEnergy(Name, PlantAdress,Lat,Long,Units,PricePerUnit,Desc);
    console.log("New FootPrint: =>" + Units*0.85)
    updateCarbonFootPrint(Name,PlantAdress,Lat,Long,Revenue,Nodedesc,NumberofSolarPannels, (Math.round(Units * 0.85)) , NodeIndex)

}


    return (
        <div className="flex flex-row w-full mt-20 justify-center items-center">
            {Loading ? 
            <div style={{marginTop: '170px'}}><Loader></Loader></div>
        : 
        <>
            {!ValidProvider ?
            <>
            <div className="flex flex-col justify-center items-center" style={{marginBottom: '150px',gap:'50px'}}>
             <div className="text-5xl text-white font-bold" >
                 You Don't Own a Producer Account
             </div>
             </div>
            </>
            :
            <>
            <div className="flex flex-col w-1/2 justify-center items-center">
                <div className="text-5xl text-white p-3 font-bold">
                    Want to sell energy?
                </div>
                <div className="text-xl text-[#9ca3af] p-3 mb-10">
                    Fill out or confirm the below details to become a provider of energy
                </div>

                <div className="flex flex-row w-full items-center justify-center">
        <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
             Name
        </div>

        <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
        <div className="text-white m-5  font-bold">
             {Name}
        </div>            
        </div>
    </div>

    <div className="flex flex-row w-full items-center justify-center">
        <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
             Plant Address
        </div>

        <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
        <div className="text-white m-5  font-bold">
             {PlantAdress}
        </div>
                           
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
                        {/*<h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>*/}
                    </div>

                    <div className="flex flex-row items-center w-2/6">
                    <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                        <div className="rounded-lg mt-5">
                            <input type="number" min="6" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" onChange={(e)=> setPricePerUnit(e.target.value)}/>                
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
                onClick={(e)=> handleclick()}
                >
                    Confirm and sell
                </button>
            </div>

            </>
            }
            </>
        }       
        </div>
    );
}

export default Sell;