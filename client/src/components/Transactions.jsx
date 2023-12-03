import React from "react";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
const Transactions = () => {
  const transactionsData = [
    { id: 1, sellerName: 'Seller 1', description: 'Transaction 1', date: '01/02/2023',  energyPurchased: 500},
    { id: 2, sellerName: 'Seller 2', description: 'Transaction 2', date: '01/02/2023',  energyPurchased: 700},
    { id: 3, sellerName: 'Seller 3', description: 'Transaction 3', date: '01/02/2023',  energyPurchased: 800 },
    { id: 4, sellerName: 'Seller 4', description: 'Transaction 4', date: '01/02/2023', energyPurchased: 200},
    { id: 5, sellerName: 'Seller 5', description: 'Transaction 5', date: '01/02/2023', energyPurchased: 100},
    { id: 6, sellerName: 'Seller 6', description: 'Transaction 6', date: '01/02/2023',  energyPurchased: 900},
    
  ];
  return (        
    <div className="flex w-full justify-center items-center ">
    <div className='grid grid-cols-3 gap-4 items-center justify-center content-around'>                
        {transactionsData.map(transaction => (
          <TransactionCard 
          key={transaction.id}
          sellerName={transaction.sellerName}
          description={transaction.description}
          date={transaction.date}          
          energyPurchased={transaction.energyPurchased}        
          />
        ))}           
    </div>
</div>           
  );
}

export default Transactions;