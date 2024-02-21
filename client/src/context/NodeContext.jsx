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

const handlecount = async () =>{
    try {
        if(!ethereum) return alert("Please Install MetaMask");
        const EnergyContract=getEthereumContract();
        console.log("Energy Providers count :")
        const res = (await EnergyContract).functions;
        await res.getAll().then((x)=>console.log(x));
        
    } catch (error) {
        console.log(error);

        throw new Error("No Ethereum Object");
    }
}
    const addNode = async () =>{
        try {
            if(!ethereum) return alert("Please Install MetaMask");
           // const {addressto, amount, message} = formdata;
            const EnergyContract=getEthereumContract();
            const parsedamount=ethers.utils.parseEther("0.0001");
            
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

            await res.addVal();         
            
         
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
        <NodeContext.Provider value={{connectwallet,CurrentAccount,handlecount,addNode}}> 
            {children}
        </NodeContext.Provider>
    );
};