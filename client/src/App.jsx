import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Sell from './components/Sell';
import MoreInfo from './components/MoreInfo';
import Transactions from './components/Transactions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      
        <NavBar />
                 
          <Welcome />
          <Services />
          <MoreInfo />
          <Sell />

          
      
      </div>
      
      
    </div>
    
  )
}

export default App
