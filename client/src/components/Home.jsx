import React from 'react';
import { useEffect, useState, useContext } from "react";
import { NavBar, Services, Welcome } from '.';
import { EnergyContext } from "../context/EnergyContext";

const Transactions = () => {    

    return (        
        <div>
           <div>
                {/* <NavBar/> */}
                <Welcome/>
                <Services/>
           </div>
        </div>       
    );
  }
  
  export default Transactions;
