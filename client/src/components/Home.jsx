import React from 'react'
import { NavBar, Services, Welcome } from '.';

const Transactions = () => {
    return (        
        <div className="min-h-screen">
           <div className='gradient-bg-welcome'>
                {/* <NavBar/> */}
                <Welcome/>
                <Services/>
           </div>


        </div>       
    );
  }
  
  export default Transactions;
