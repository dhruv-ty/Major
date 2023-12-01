
const Profile = () => {
    return (        
        <div className="min-h-screen" style={{width: "100%", display: "grid", placeItems: "center", background: "rgb(6,20,29)"}}>
            <div className="border-2 border-sky-500 flex justify-center py-10 rounded-lg bg-[#26262a] mx-2" style={{height: "auto", width: "500px", boxShadow: '0px 0px 50px -7px rgba(25,116,223,0.75)'}}>
            <div className="flex flex-col w-[430px]">
                <div className="flex flex-row">
                    
                <img src="https://agnisolar.com/wp-content/uploads/2019/08/solar-panel-on-roof-1024x585.png" style={{borderRadius: "50%", height: "150px", width: "150px"}}/>
                <div className="flex flex-col">
                    
                <div className="text-white text-2xl font-bold font-sans mx-4 mt-8">
                    Jane Doe
                </div>
                <div className="text-white text-left text-xs font-light px-4 my-7">
                       #1234, Ria Nagar, Bangalore 570001 Karnataka, India
                </div>
                </div>
                </div>
                <div className="my-3" style={{width: "40px", height:"2px", background: "rgb(25,116,223)", marginLeft: "45%"}}></div>
                <div className="flex flex-row justify-around">
                <div className="text-white text-xl font-bold font-sans mx-2">
                    Latitude
                </div>
                <div className="text-white text-xl font-bold font-sans">
                    Longitude
                </div>
                </div>
                <div className="flex flex-row justify-around my-2">
                <input className="white-glassmorphism bg-transparent my-1" type="number" placeholder="Lat" style={{width: "80px"}}/>
                <input className="white-glassmorphism bg-transparent my-1" type="number" placeholder="Long" style={{width: "80px"}}/>
                </div>
                <input className="white-glassmorphism bg-transparent my-4" type="number" placeholder="No. Of Solar Panels"/>
                <div className="flex flex-row justify-around">
                <div className="text-white text-xl font-bold font-sans">
                    Energy
                </div>
                <div className="text-white text-xl font-bold font-sans">
                    Profit
                </div>
                </div>
                <div className="flex flex-row justify-around my-2">
                    <div className="text-white text-bold font-sans rounded-lg p-2 w-fit" style={{background: "rgb(25,116,223)"}}>22 KWH</div>
                    <div className="text-white text-bold font-sans rounded-lg p-2 w-fit" style={{background: "rgb(25,116,223)"}}>$ 143</div>
                </div>
                <button className="text-white text-bold font-sans rounded-lg mt-4 px-40 py-2 w-fit" type="button" style={{background: "rgb(25,116,223)"}}>Save Changes</button>
                </div>
            </div>
        </div>        
    );
}

export default Profile;
