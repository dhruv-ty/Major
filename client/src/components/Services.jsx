import { useContext,useEffect,useState } from "react";
import BuyIndi from "./BuyIndi";
import { EnergyContext } from "../context/EnergyContext";

const Services = () => {

    const {handlecount,Providers,CurrentAccount}=useContext(EnergyContext);
    const [data, setdata] = useState({})
    const [len, setlen] = useState(0)
    const arr=new Array(len);
    handlecount();

    const [curLat, setCurLat] = useState("");
    const [curLong, setCurLong] = useState("");

    useEffect(() => {
        checkLatLong();
        getDataLen();
    });

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

    async function getDataLen() {
        console.log('starting now!!!!!!!!!!!!!')
        console.log(Providers)
        setlen(Object.keys(Providers[0]).length);
        setdata(1);
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
                            return <BuyIndi Name= {Providers[0][i][1]} 
                            Plant = {Providers[0][i][2]} 
                            Lat = {destLat} 
                            Long = {destLong} 
                            Energy={parseInt(Providers[0][i][5]['_hex'])} 
                            Price={parseInt(Providers[0][i][6]['_hex'])} 
                            curLat={curLat}
                            curLong={curLong}/> 
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