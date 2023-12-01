const MoreInfo = () => {
    return (        
        <div className="flex flex-row w-full mt-20 justify-center items-center">
            <div className="flex flex-col w-1/2">
                
                <div className="flex flex-row w-full justify-center items-center rounded-lg bg-[#26262a] p-6">
                    <div className="w-1/6">
                        <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" resizeMode={"cover"} style={{width: 100, height: 100, display: "block", borderRadius: "50%"}}/>
                    </div>

                    <div className="flex flex-col w-5/6 p-2">                        
                        <div className="text-white font-bold text-5xl">
                            Jane Doe
                        </div>

                        <div className=" text-[#9ca3af] text-xl mt-2">
                            #1234, Ria Nagar, Bangalore 570001 Karnataka, India
                        </div>                        
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg bg-[#26262a] p-6 mt-3">                
                    <div className="text-white font-bold text-2xl w-4/6">
                        Number of solar panels installed
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg bg-[#3f3f46] justify-center items-center w-fit px-3 py-1">
                        10
                    </div>              
                </div>

                <div className="flex flex-row w-full rounded-lg bg-[#26262a] p-6 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        <div className="text-white font-bold text-2xl">
                            Energy history
                        </div>                        
                    </div>            
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg bg-[#26262a] p-6 mt-3">                
                    <div className="text-white font-bold text-2xl w-4/6">
                        Total Revenue generated
                    </div>      

                    <div className="w-2/6 text-white text-xl font-bold font-sans mx-4 rounded-lg bg-[#3f3f46] justify-center items-center w-fit px-3 py-1">
                        1000000₹
                    </div>              
                </div>

                <div className="text-white font-bold text-3xl items-start justify-start mt-10 mb-5">
                    Buy energy
                </div>

                <div className="flex flex-row w-full justify-center items-center rounded-lg bg-[#26262a] p-6 mt-3">                    
                    <div className="flex flex-col p-2 w-full">                        
                        <div className="text-white font-bold text-2xl">
                            Total selling energy
                        </div>

                        <div className="flex flex-row w-full justify-around items-center mt-5">                            
                            <div className="text-white text-3xl font-bold font-sans mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                22KWH
                            </div>                                
                            
                            <div className="text-white text-2xl font-bold">
                                at
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex flex-row items-center">
                                    <div className="text-white text-3xl font-bold font-sans mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                        ₹15
                                    </div>

                                    <div className="text-white text-2xl font-bold">
                                        per unit
                                    </div>
                                </div>

                                <h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>
                            </div>
                        </div>   
                    </div>
                </div>

                <div className="flex flex-row w-full rounded-lg bg-[#26262a] p-6 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        <div className="text-white font-bold text-2xl">
                            How much do you want to purchase?
                        </div>                        
                    </div>            
                </div>

                <div className="flex flex-row w-full rounded-lg bg-[#26262a] pl-6 pr-6 pb-3 mt-3">                
                    <div className="flex flex-col w-full p-2">                        
                        
                        <div className="flex flex-row w-full items-center justify-center">
                            <div className="text-xl text-white mr-3 w-4/6 font-bold">
                                Enter amount of energy
                            </div>

                            <div className="flex flex-row items-center w-2/6">
                                <div className="rounded-lg bg-[#26262a] mt-5">
                                    <input type="number" min="0" style={{background: "#3f3f46", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="0" />                
                                </div>

                                <div className="text-xl text-white mt-3 mr-3 ml-3">
                                    KWH
                                </div>
                            </div>
                        </div> 

                        <div className="flex flex-row w-full items-center justify-center">
                            <div className="text-xl text-white mt-3 mr-3 w-4/6 font-bold">
                                Est. price to pay
                            </div>

                            <div className="flex flex-row items-center w-2/6">
                                <div className="text-white text-base font-bold font-sans mt-5 mx-4 rounded-lg bg-[#097969] justify-center items-center w-fit px-3 py-1">
                                        120
                                </div>

                                <div className="text-xl text-white mt-3 mr-3 ml-3 items-center mt-5">
                                    ₹
                                </div>
                            </div>
                        </div>                         

                    </div>
                </div>
                
                <div className="flex flex-row w-full items-end justify-end">
                    <button type="button" className="text-white mt-10 mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        Confirm and buy
                    </button>
                </div>
                    
            </div>
        </div>
                
        
    );
}

export default MoreInfo;