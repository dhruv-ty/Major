import BuyIndi from "./BuyIndi";

const Services = () => {
    return (        
        <div className="flex w-full justify-center items-center ">
            <div className='grid grid-cols-3 gap-4 items-center justify-center content-around'>                
                <BuyIndi />
                <BuyIndi />
                <BuyIndi />
                <BuyIndi />            
            </div>
        </div>    
    );
}

export default Services;