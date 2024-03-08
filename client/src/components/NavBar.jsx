import React from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';


// const NavBarItem = ({ title, classprops }) => (
//     <li className={`text-white mx-4 cursor-pointer ${classprops}`}>{title}</li>
//   );
  

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);  

    return (     
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <Link to="/"><img src={logo} className='w-20 cursor-pointer'/></Link>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
            <Link to="/Sell"> <button type="button" className="text-white justify-center items-center px-8 my-4 active:bg-[#2952e3] py-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Post An Ad
                </button></Link>
                {/* {["Buy", "Transactions", "Profile"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}    */}
                <li className='text-white mx-4 cursor-pointer hover:bg-[#2546bd] rounded-full px-8 my-4 py-2 active:bg-[#2952e3]'><Link to="/Transactions">Transactions</Link></li>             
                <li className='text-white mx-4 cursor-pointer hover:bg-[#2546bd] rounded-full px-8 my-4 py-2'><Link to='/Profile'>Profile</Link></li>             
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