import { useContext,useEffect,useState } from "react";
import BuyIndi from "./BuyIndi";
import { EnergyContext } from "../context/EnergyContext";

const Services = ({data, len}) => {

  
    const {handlecount,Providers,CurrentAccount}=useContext(EnergyContext);
    const arr=new Array(len);
    handlecount();

    const [curLat, setCurLat] = useState("");
    const [curLong, setCurLong] = useState("");

    useEffect(() => {
        checkLatLong();
    }, []);

    const checkLatLong = () => {
        if(curLat.length == 0 && curLong.length == 0){
            getLatLong();
        }else{
            return;
        }
    }

    const getLatLong = () => {

        navigator.geolocation.getCurrentPosition(function(position) {
            setCurLat('' + position.coords.latitude);
            setCurLong('' + position.coords.longitude);
    
          console.log("Latitude is :", position.coords.latitude);
    
          console.log("Longitude is :", position.coords.longitude);
    
        });
    
    }

    return (        
        <div className="flex flex-col w-full mt-10 justify-center items-center">            
            {/*<button style={{position: 'flex',top:'100px',width:'300px',height:'60px'}} className='btn' onClick={(e) => handleclick()}>Generate Listing</button>*/}
            <div>                
                
                {data >=1 &&
                    <div className='grid grid-cols-3 gap-4 items-center justify-center content-around' >
                        {Providers !== undefined && CurrentAccount && arr.fill("1") && arr.map((x,i)=>{
                            let destLat = Providers[0][i][3];
                            let destLong = Providers[0][i][4];
                            let dist = Math.acos((Math.sin(curLat*(Math.PI/180.0))*Math.sin(destLat*(Math.PI/180.0))) + (Math.cos(curLat*(Math.PI/180.0))*Math.cos(destLat*(Math.PI/180.0))*Math.cos((destLong*(Math.PI/180.0))-(curLong*(Math.PI/180.0)))))*6371;
                            return <BuyIndi Name= {Providers[0][i][1]} Plant = {Providers[0][i][2]} Lat = {destLat} Long = {destLong} Energy={parseInt(Providers[0][i][5]['_hex'])} Price={parseInt(Providers[0][i][6]['_hex'])} Distance={dist.toFixed(2)}/> 
                        })}
                    {!CurrentAccount && 
                        <div>Please Connect to Metamask to continue </div>
                    }
                    </div>
                }
            
            </div>
        </div>    
    );
}

export default Services;