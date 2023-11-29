import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import {Loader} from './';

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => {handleChange(e, name)}}
        className="my-2 w-full p-2 outline-none bg-transaprent text-white rounded-full border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {

    const connectWallet = () => {

    }
    
    const handleSubmit = () => {

    }

    return (        
        
        <div className='flex w-full justify-center items-center'>
            <div className='flex flex-col py-12 items-center justify-center'>
                <div className='flex justify-start flex-col'>
                    <div className="text-white text-3xl sm:text-5xl text-gradient">
                        Let's get you <br /> connected
                    </div>
                    <p className="text-white text-base text-left font-light w-11/12 mt-5">
                        Before you start buying and selling energy over our platform
                    </p>
                    <button type="button" onClick={connectWallet} className="text-white flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        Connect
                    </button>
                </div>

                
                {/* 
                <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>                    
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">                                                               
                    <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    </div>
                    </div>

                    <div className="p-5 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => {}} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => {}} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => {}} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {}} />

                        {false ? (
                            <Loader />
                        ): (
                            <button type="button" onClick={handleSubmit} className="my-2 p-2 w-full border-white border-2 rounded-full text-white">Send</button>
                        )}
                    </div>
                </div>
                */}
                

            </div>
        </div>    
    );
}

export default Welcome;