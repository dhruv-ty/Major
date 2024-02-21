import { useEffect, useState } from "react";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => {handleChange(e, name)}}
        className="my-2 w-full p-2 outline-none bg-transaprent text-white rounded-full border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {

    const [walletAddr, setWalletAddr] = useState("");

    async function connectWallet() {
        if(window.ethereum){
            console.log("there");

            try{
                const account = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(account);
                setWalletAddr(account[0]);
            } catch(error){
                console.log(error);
            }
            
        }
    }

    const findAuthorizedAccount = async () => { //Gets authorized accounts
        //const ethereum = getEthereumObject();
        
        try{
            if(ethereum == null){
                console.log("findAuthorizedAccount: Metamask not found");
                return;
            }
    
            const accounts = await ethereum.request({method: "eth_accounts"});
    
            if(accounts.length == 0){
                console.log("findAuthorizedAccount: No authorized accounts found");
                connectWallet();
            }
            else{
                console.log("Finished Setting");
                setWalletAddr(accounts[0]);
                //getContract(ethereum);
            }
            } catch(error){
                console.log(error);
        }
    }
    
    useEffect(()=> {findAuthorizedAccount});

    return (        

            <div className='flex w-full justify-center items-center'>
                { walletAddr.length == 0 ? (
                <div className='flex flex-col py-12 items-center justify-center'>
                    <div className='flex justify-start flex-col'>
                        <div className="text-white text-3xl sm:text-5xl text-gradient">
                            Let's get you <br /> connected
                        </div>
                        <p className="text-white text-base text-left font-light w-11/12 mt-5">
                            Before you start buying and selling energy over our platform
                        </p>
                                                
                        <button type="button" onClick={connectWallet} className="text-white flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            Connect
                        </button>
                        
                    </div>
                    
                </div>
                ) : ( 
                <div className="rounded-lg bg-[#26262a] w-full mt-5 text-white text-base p-5">
                    {walletAddr}
                </div>
                )
            }    
            </div>
            
            
    );
}

export default Welcome;