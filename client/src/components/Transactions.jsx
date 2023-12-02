import React from "react";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
const Transactions = () => {
  const transactionsData = [
    { id: 1, sellerName: 'Seller 1', description: 'Transaction 1', date: '2023-01-01', amount: 100, energyPurchased: 500, profit: 20 },
    { id: 2, sellerName: 'Seller 2', description: 'Transaction 2', date: '2023-02-01', amount: 150, energyPurchased: 700, profit: 30 },
    { id: 3, sellerName: 'Seller 3', description: 'Transaction 3', date: '2023-03-01', amount: 180, energyPurchased: 800, profit: 40 },
    { id: 4, sellerName: 'Seller 4', description: 'Transaction 4', date: '2023-04-01', amount: 120, energyPurchased: 200, profit: 50 },
    { id: 5, sellerName: 'Seller 5', description: 'Transaction 5', date: '2023-05-01', amount: 250, energyPurchased: 100, profit: 60 },
    { id: 6, sellerName: 'Seller 6', description: 'Transaction 6', date: '2023-06-01', amount: 110, energyPurchased: 900, profit: 70 },
    
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
          amount={transaction.amount}
          energyPurchased={transaction.energyPurchased}
          profit={transaction.profit}
          />
        ))}           
    </div>
</div>           
  );
}

export default Transactions;