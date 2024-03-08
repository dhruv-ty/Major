import React,{useEffect,useState} from 'react'
import {ethers} from 'ethers';

import { contractABI, contractAddress } from '../Utils/nodeconstants';

export const NodeContext = React.createContext();


const getEthereumContract = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner()
     const EnergyContract = new ethers.Contract(contractAddress,contractABI,signer)
     console.log(EnergyContract);
     return EnergyContract;

}

export const NodeProvider = ({children}) =>{
const [CurrentAccount, setCurrentAccount] = useState("");
const [formdata, setformdata] = useState({addressto: "", amount: '',  message: ''});
const [loading, setloading] = useState(false);
const [EnergyProviders, setEnergyProviders] = useState({});
const [Count, setCount] = useState(localStorage.getItem('Count'));

const handlechange =(e, name)=>{
             setformdata((prevState)=>({ ...prevState,[name]: e.target.value}));
}


    const checkifwallet = async () =>{
       try {
        if(!ethereum) return alert("Please Install MetaMask");

        const accounts =await ethereum.request({method: 'eth_accounts'});
        if(accounts.length){
            setCurrentAccount(accounts[0]);
        }
        else{
            console.log("No Accounts Found");
        }
        console.log(accounts);
        
       } catch (error) {
        console.log(error);

        throw new Error("No Ethereum Object");
       }

       
    }

    useEffect(() => {
        checkifwallet();
    }, []);

    const connectwallet = async () =>{
        try {
            if(!ethereum) return alert("Please Install MetaMask");
            const accounts =await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum Object");
        }
    }

const handlenodecount = async () =>{
    try {
        if(!ethereum) return alert("Please Install MetaMask");
        const EnergyContract=getEthereumContract();
        console.log("Energy Providers count :")

        setTimeout(async function() {
            const xp = (await EnergyContract).functions.getAll().then((x)=>{
                const  v = x.map(obj => ({...obj}));
        
            /// wait 3 seconds
            setTimeout(function() {
                setEnergyProviders(v);
            }, 3000);
        }, 3000);
        
            
            
            
       })
        
    } catch (error) {
        console.log(error);

        throw new Error("No Ethereum Object");
    }
}

const updateNode =async (locState,NumberofSolarPannels,Desc,Units,energy,Index,CarbonFootPrint) =>{
    try {
        if(!ethereum) return alert("Please Install MetaMask");
       // const {addressto, amount, message} = formdata;
        const EnergyContract=getEthereumContract();
        const parsedamount=ethers.utils.parseEther("0.0001");
        console.error(locState,NumberofSolarPannels,Desc)
        console.log("Revenue => " + Units*energy + " Node Index=>" + Index);
        
        // await ethereum.request({
        //     method: 'eth_sendTransaction',
        //     params: [{
        //         from: CurrentAccount,
        //         to: '0x203d8f9B976828C49f43E30Cd6A6737B24CD6E88',
        //         gas: '0x5208',
        //         value: parsedamount._hex,
        //     }]
        // });
        const res = (await EnergyContract).functions;
        // console.log(locState.energy);
        await res.updateRevenue(locState.selleraddr,locState.name,locState.plant,locState.lat,locState.long, (Units*energy), NumberofSolarPannels,  Desc,CarbonFootPrint, Index).then((x)=>console.log("Updation Successful"));         
        
}catch (error) {
    console.log(error);

    throw new Error("No Ethereum Object");
}
}

const updateCarbonFootPrint =async (Name,PlantAdress,Lat,Long,Revenue,Nodedesc,NumberofSolarPannels,CarbonFootPrint,NodeIndex) =>{
    try {
        if(!ethereum) return alert("Please Install MetaMask");
       // const {addressto, amount, message} = formdata;
        const EnergyContract=getEthereumContract();
        const parsedamount=ethers.utils.parseEther("0.0001");
        
        // await ethereum.request({
        //     method: 'eth_sendTransaction',
        //     params: [{
        //         from: CurrentAccount,
        //         to: '0x203d8f9B976828C49f43E30Cd6A6737B24CD6E88',
        //         gas: '0x5208',
        //         value: parsedamount._hex,
        //     }]
        // });
        const res = (await EnergyContract).functions;
        // console.log(locState.energy);
        await res.updateCarbonFootPrint(CurrentAccount, Name,PlantAdress,Lat,Long,Revenue,NumberofSolarPannels,Nodedesc, CarbonFootPrint, NodeIndex).then((x)=>console.log("Updation Successful"));         
        
}catch (error) {
    console.log(error);

    throw new Error("No Ethereum Object");
}
}


    const addNode = async (Name, PlantAdress,Lat,Long,Revenue,NumberofSolarPannels, Desc) =>{
        try {
            if(!ethereum) return alert("Please Install MetaMask");
           // const {addressto, amount, message} = formdata;
            const EnergyContract=getEthereumContract();
            const parsedamount=ethers.utils.parseEther("0.0001");
            console.log(Name, PlantAdress,Lat,Long,Revenue,NumberofSolarPannels, Desc);
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: CurrentAccount,
                    to: '0x203d8f9B976828C49f43E30Cd6A6737B24CD6E88',
                    gasLimit: 1000000000000000000,
                    value: parsedamount._hex,
                }]
            });
            const res = (await EnergyContract).functions;

            await res.addVal(CurrentAccount, Name, PlantAdress,Lat,Long,Revenue,NumberofSolarPannels,Desc,0).then((x)=>console.log("Transaction Successful"));         
            
         
         /* setloading(true);
          console.log(`Loading - ${transactionhash.hash}`)
          await transactionhash.wait();
          setloading(false);
          console.log(`Success - ${transactionhash.hash}`)

          const transactioncount = await TransactionContract.getCount();
          setCount(transactioncount.toNumber());
       */   
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum Object");
        }
    }
    
    return (
        <NodeContext.Provider value={{connectwallet,CurrentAccount,updateCarbonFootPrint,handlenodecount,addNode,EnergyProviders,updateNode}}> 
            {children}
        </NodeContext.Provider>
    );
};