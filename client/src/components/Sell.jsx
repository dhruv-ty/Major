import { useState } from "react";

const SellFields = ({label, value}) => (
    
    <div className="flex flex-row w-full items-center justify-center">
        <div className="text-2xl text-white mt-3 mr-3 w-1/6 font-bold">
            {label}
        </div>

        <div className="rounded-lg blue-glassmorphism w-5/6 mt-5">
            <input type="text" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={value} />                
        </div>
    </div>
    
);

const SellFieldsLabelImp = ({label, value, units, type}) => (
    
    <div className="flex flex-row w-full items-center justify-center">
        <div className="text-xl text-white mt-3 mr-3 w-4/6 font-bold">
            {label}
        </div>

        <div className="flex flex-row items-center w-2/6">
            <div className="rounded-lg mt-5">
                <input type={type} min={value} style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue={value} />                
            </div>

            <div className="text-xl text-white mt-3 mr-3 ml-3">
                {units}
            </div>
        </div>
    </div>
    
);



const Sell = () => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    

    const componentDidMount = () => {

        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
    
          console.log("Latitude is :", position.coords.latitude);
    
          console.log("Longitude is :", position.coords.longitude);
    
        });
    
    }

    return (
        <div className="flex flex-row w-full mt-20 justify-center items-center">
            <div className="flex flex-col w-1/2 justify-center items-center">
                <div className="text-5xl text-white p-3 font-bold">
                    Want to sell energy?
                </div>
                <div className="text-xl text-[#9ca3af] p-3 mb-10">
                    Fill out or confirm the below details to become a provider of energy
                </div>

                <SellFields label="Name" value="Jane Doe"/>

                <SellFields label="Address" value="#1234, Ria Nagar, Bangalore 570001 Karnataka, India, Asia, Earth" />

                <div className="flex flex-row w-full items-center justify-around mt-10 mb-10">

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Lat
                        </div>
                        <div className="rounded-lg blue-glassmorphism w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {latitude}
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex flex-row items-center">
                        <div className="text-xl text-white mt-3 mr-3">
                            Long
                        </div>
                        <div className="rounded-lg blue-glassmorphism w-[200px] mt-5">
                            <div className="text-base text-[#9ca3af] p-3">
                                {longitude}
                            </div>
                        </div>
                    </div>

                    <button type="button" onClick={componentDidMount} className="text-white font-bold mt-4 text-xs w-fit items-center px-4 bg-[#097969] py-3 rounded-full cursor-pointer hover:bg-[#064e3b]">
                        Auto Capture
                    </button>

                </div>
                
                <SellFieldsLabelImp label="How many units are you selling" value="20" units="KWH" type="number" />

                <div className="flex flex-row w-full items-center justify-center">
                    <div className="flex flex-col mt-3 mr-3 w-4/6">
                        <div className="text-xl text-white font-bold">
                            Est. Price per unit
                        </div>
                        <h1 className="mt-2 text-[#9ca3af]">(according to current rates: ₹6 per unit)</h1>
                    </div>

                    <div className="flex flex-row items-center w-2/6">
                        <div className="rounded-lg mt-5">
                            <input type="number" min="6" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} defaultValue="6" />                
                        </div>

                        <div className="text-xl text-white mt-3 mr-3 ml-3">
                            ₹
                        </div>
                    </div>
                </div>
                                

                <div className="flex flex-row w-full items-start mt-5 justify-center">
                    <div className="text-2xl text-white mt-5 mr-3 w-1/6 font-bold">
                        Description
                    </div>

                    <div className="rounded-lg w-5/6 mt-5 ml-3">
                        <textarea rows="5" style={{background: "rgb(39, 51, 89, 0.4)", border: 0, width: "100%", borderRadius: 10, color: "#9ca3af"}} placeholder="Enter some description">
                            </textarea>             
                    </div>
                </div>

                <button type="button" className="text-white mt-10 mb-10 text-xl w-fit mr-4 px-10 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Confirm and sell
                </button>
            </div>

                
        </div>
    );
}

export default Sell;