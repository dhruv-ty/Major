import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import pic from '../../images/pic.jpg';
import moment from 'moment';

const TransactionCard = ({BuyerAddress, sellerName, description, date, amount, energyPurchased, profit}) => {

  return (        
    <div className="flex justify-center items-center rounded-lg blue-glassmorphism mx-5">
    <div className="flex flex-col w-[350px]">
        
        <img src={pic} width={350} resizeMode={"cover"} style={{borderRadius: 10}}/>
        
        <div className="flex flex-row w-full justify-between mt-5">
        <div className="text-white text-2l font-bold font-sans mx-4">
            Seller Name:
            </div>
            <div className="text-white text-2xl font-sans mx-4">
                 {sellerName}
            </div>
            <div className="text-white text-xs font-sans mx-3 justify-center items-center w-fit px-2 py-2">
                {moment.unix(date).format('L')}
            </div>
        </div>


        <div className="text-white text-left text-xs font-light px-4 mt-2">
            {description}
        </div>

        <div className="flex flex-row justify-between mt-3" style={{width: "95%"}}>
            <div className="text-white text-base font-bold px-4 mt-2 ">
                Sold To:
            </div>
            <div className="text-white text-left text-xs font-light px-4 mt-2">
            {BuyerAddress.substr(0,12) + "....." + BuyerAddress.slice(-4)}
        </div>
        </div>

        
        <div className="flex flex-row justify-between mt-3" style={{width: "95%"}}>
            <div className="text-white text-base font-bold px-4 mt-2 ">
                Energy Sold:
            </div>
                <div className="text-white text-base font-bold px-4 mt-2 rounded-lg bg-[#097969] justify-center items-center w-fit ">{energyPurchased} KWH</div>
        </div>

        <div className="flex flex-row justify-between" style={{width: "95%"}}>
            <div className="text-white text-base font-bold px-4 mt-2 ">
                Amount:
            </div>
                <div className="text-white text-base font-bold px-4 mt-2 rounded-lg bg-[#097969] justify-center items-center w-fit ">₹ {amount}</div>
        </div>
    
    
        
        <div className="flex flex-row w-full text-white mt-4">                       
        </div>

    </div>    

</div>
  );
}

export default TransactionCard;