import { useContext,useEffect,useState } from "react";
import BuyIndi from "./BuyIndi";
import { EnergyContext } from "../context/EnergyContext";

const Services = () => {
    const {handlecount,Providers,CurrentAccount}=useContext(EnergyContext);
    const [data, setdata] = useState({})
    const [len, setlen] = useState(0)
    const arr=new Array(len);
    handlecount();

const handleclick= () => {
    
    console.log(Providers);
    setlen(Object.keys(Providers[0]).length);
    setdata(1);
}



    return (        
        <div className="flex w-full justify-center items-center ">
            <div className='grid grid-cols-3 gap-4 items-center justify-center content-around'>                
            <button style={{position: 'absolute',top:'100px',width:'300px',height:'60px'}} className='btn' onClick={(e) => handleclick()}>Generate Listing</button>          
            </div>
            {data >=1 &&
     <div className='listpr'>
      {Providers !== undefined && CurrentAccount && arr.fill("1") &&
      arr.map((x,i)=>{
      return  <BuyIndi Name= {Providers[0][i][1]} Plant = {Providers[0][i][2]}></BuyIndi> 
      })}
      {!CurrentAccount && 
         <div className='dashboard'>Please Connect to Metamask to continue </div>
      }
     </div>
    }
        </div>    
    );
}

export default Services;