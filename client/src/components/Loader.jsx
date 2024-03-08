import './Loader.css';
const Loader = () => {
    return ( 
        <div style={{display: 'flex',flexDirection: 'column' , gap: '20px',marginBottom:'120px'}}>
        <div class="loader">
        </div>
            <div style={{color: 'white',position:"relative",left:'-5px'}}> Loading...</div>      
        </div>       
    );
}

export default Loader;