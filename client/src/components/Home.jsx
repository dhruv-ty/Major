import React from 'react';
import { useEffect, useState, useContext } from "react";
import { NavBar, Services, Welcome } from '.';
import { EnergyContext } from "../context/EnergyContext";

const Transactions = () => {

    const {Providers}=useContext(EnergyContext);    
    const [Data, setdata] = useState({})
    const [Len, setlen] = useState(0)

    useEffect(() => {
        getLenData();
    }, []);

    async function getLenData() {
        setlen(Object.keys(Providers[0]).length);
        setdata(1);
    }

    return (        
        <div>
           <div>
                {/* <NavBar/> */}
                <Welcome/>
                <Services data={Data} len={Len}/>
           </div>
        </div>       
    );
  }
  
  export default Transactions;
