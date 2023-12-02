import React from "react";
import { Link } from "react-router-dom";
import pic from '../../images/pic.jpg';
const TransactionCard = ({sellerName, description, date, amount, energyPurchased, profit}) => {

  return (        
    <div className="flex justify-center items-center rounded-lg bg-[#26262a] mx-5">
    <div className="flex flex-col w-[350px]">
        
        <img src={pic} width={350} resizeMode={"cover"} style={{borderRadius: 10}}/>
        
        <div className="text-white text-2xl font-bold font-sans mx-4 mt-5">
            {sellerName}
        </div>
        <div className="text-white text-left text-xs font-light px-4">
            {description}
        </div>

        <div className="text-white text-base font-bold font-sans mx-4 mt-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
            {date}
        </div>
        <div className="flex flex-row justify-between" style={{width: "95%"}}>
        <div className="text-white text-base font-bold px-4 mt-2 ">
            Energy Purchased:
        </div>
        <div className="text-white text-base font-bold px-4 mt-4 rounded-lg bg-[#097969] justify-center items-center w-fit ">{energyPurchased}</div>
        </div>
        <div className="flex flex-row justify-between" style={{width: "95%"}}>
        <div className="text-white text-base font-bold px-4 mt-2 ">
            Amount Paid:
        </div>
        <div className="text-white text-base font-bold px-4 mt-4 rounded-lg bg-[#097969] justify-center items-center w-fit ">{amount}</div>
        </div>
        <div className="flex flex-row justify-between" style={{width: "95%"}}>
        <div className="text-white text-base font-bold px-4 mt-2 ">
            Profit Gained:
        </div>
        <div className="text-white text-base font-bold px-4 mt-4 rounded-lg bg-[#097969] justify-center items-center w-fit ">{profit}</div>
        </div>
        <div className="flex flex-row w-full justify-between text-white text-base font-bold mt-4">
            <div></div>
            <div className="items-end justify-end">
            <button type="button" className="text-white text-xs text-right justify-center w-fit items-center mr-4 px-4 mb-4 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                More
            </button>
            </div>
        </div>

    </div>    

</div>
  );
}

export default TransactionCard;