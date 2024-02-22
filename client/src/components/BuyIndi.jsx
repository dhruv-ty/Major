
import React from "react";
import { Link } from "react-router-dom";
const BuyIndi = ({Name, Plant, Energy, Price, Lat, Long, Distance}) => {

    return (        
        <div className="flex justify-center items-center rounded-lg blue-glassmorphism mx-5">
            <div className="flex flex-col w-[350px]">
                
                <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" width={350} resizeMode={"cover"} style={{borderRadius: 10}}/>
                
                <div className="text-white text-2xl font-bold font-sans mx-4 mt-5">
                    {Name}
                </div>
                <div className="text-white text-left text-xs font-light px-4">
                    {Plant}
                </div>

                <div className="text-white text-base font-bold font-sans mx-4 mt-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                    {Energy}KWH • ₹{Price}
                </div>
                <div className="text-white text-left text-base font-light px-4 mt-2">
                    Distance: {Distance}km
                </div>

                <div className="flex flex-row w-full justify-end">                    
                    <div className="items-end justify-end">
                        <Link to="/MoreInfo" state={{name: Name, plant: Plant, energy: Energy, price: Price, lat: Lat, long: Long, dist: Distance}}>
                            <button type="button" className="text-white text-xs justify-center w-fit items-center mr-4 px-4 mb-4 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                More Info
                            </button>
                        </Link>
                    </div>
                </div>

            </div>    

        </div>    
    );
}

export default BuyIndi;