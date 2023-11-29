import React from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavBarItem = ({ title, classprops }) => (
    <li className={`text-white mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );
  

const NavBar = () => {
    const [toggleMenu, setToggleMenu]  =React.useState(false);

    return (        
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} className='w-20 cursor-pointer'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                <button type="button" className="text-white justify-center items-center px-8 my-4 bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Sell
                </button>
                {["Transactions", "Profile"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}                
            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}/>
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/>
                }
            </div>
        </nav>    
    );
}

export default NavBar;