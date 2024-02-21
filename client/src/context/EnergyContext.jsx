import React,{useEffect,useState} from 'react'
import {ethers} from 'ethers';

import { contractABI, contractAddress } from '../Utils/constants';

export const EnergyContext = React.createContext();


const getEthereumContract = async () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner()
    const EnergyContract = new ethers.Contract(contractAddress,contractABI,signer)
     console.log(EnergyContract);
     return EnergyContract;

}

export const TransactionProvider = ({children}) =>{
const [CurrentAccount, setCurrentAccount] = useState("");
const [Providers, setProviders] = useState({});

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

const handlecount = async () =>{
    try {
        if(!ethereum) return alert("Please Install MetaMask");
        const EnergyContract=getEthereumContract();
        console.log("Energy Transaction count :")

        
        const xp = (await EnergyContract).functions.getAll().then((x)=>{
            const  v = x.map(obj => ({...obj}));
           // console.log(v);
            setProviders(v);
            
       })
        
    } catch (error) {
        console.log(error);

        throw new Error("No Ethereum Object");
    }
}
    const sendEnergy = async ( SenderName, PlantAdress,Lat,Long,Units,PricePerUnit,Desc) =>{
        try {
            if(!ethereum) return alert("Please Install MetaMask");
           // const {addressto, amount, message} = formdata;
            const EnergyContract=getEthereumContract();
            const parsedamount=ethers.utils.parseEther("0.0001");

            console.log(CurrentAccount, SenderName, PlantAdress,Lat,Long,Units,PricePerUnit,Desc);
            
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: CurrentAccount,
                    to: '0x203d8f9B976828C49f43E30Cd6A6737B24CD6E88',
                    gas: '0x5208',
                    value: parsedamount._hex,
                }]
            });
            const res = (await EnergyContract).functions;

            await res.addVal(SenderName, PlantAdress,Lat,Long,Units,PricePerUnit,Desc).then((x)=>console.log("Transaction Successful"));         
            
         
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
        <EnergyContext.Provider value={{connectwallet,CurrentAccount,handlecount,sendEnergy,Providers}}> 
            {children}
        </EnergyContext.Provider>
    );
};