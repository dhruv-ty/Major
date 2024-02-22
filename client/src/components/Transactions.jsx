import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import { useContext, useState } from "react";
import { EnergyContext } from "../context/EnergyContext";
import { BuyContext } from "../context/BuyContext";
import { Description } from "@ethersproject/properties";

const Transactions = () => {

  const {handlecount,Transactions,CurrentAccount}=useContext(BuyContext);
  const [data, setdata] = useState({})
  const [len, setlen] = useState(0)
  const arr=new Array(len);
  handlecount();

  useEffect(() => {
    getDataLen();
  })
  
  async function getDataLen() {
    console.log('starting now!!!!!!!!!!!!!')
    console.log(Transactions)
    setlen(Object.keys(Transactions[0]).length);
    setdata(1);
  }

  {/*
  const transactionsData = [
    { id: 1, sellerName: 'Seller 1', description: 'Transaction 1', date: '01/02/2023',  energyPurchased: 500},
    { id: 2, sellerName: 'Seller 2', description: 'Transaction 2', date: '01/02/2023',  energyPurchased: 700},
    { id: 3, sellerName: 'Seller 3', description: 'Transaction 3', date: '01/02/2023',  energyPurchased: 800 },
    { id: 4, sellerName: 'Seller 4', description: 'Transaction 4', date: '01/02/2023', energyPurchased: 200},
    { id: 5, sellerName: 'Seller 5', description: 'Transaction 5', date: '01/02/2023', energyPurchased: 100},
    { id: 6, sellerName: 'Seller 6', description: 'Transaction 6', date: '01/02/2023',  energyPurchased: 900},
    
  ];
  const {handlecount}=useContext(BuyContext);
*/}
  
  console.log(handlecount());
  return (        
    <div className="flex w-full justify-center items-center ">
      {/*<button style={{position: 'flex',top:'100px',width:'300px',height:'60px'}} className='btn' onClick={(e) => handleclick()}>Generate Listing</button>*/}
    <div>                
      {data >=1 &&
          <div className='grid grid-cols-3 gap-4 items-center justify-center content-around' >
              {Transactions !== undefined && CurrentAccount && arr.fill("1") && arr.map((x,i)=>{                                    
                  return <TransactionCard sellerName={Transactions[0][i]['SellerName']} description={Transactions[0][i]['SellerPlantAdress']} date={Transactions[0][i]['timestamp']['_hex']} amount={parseInt(Transactions[0][i]['TotalPrice']['_hex'])} energyPurchased={parseInt(Transactions[0][i]['Units']['_hex'])} profit={0}/>
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

export default Transactions;