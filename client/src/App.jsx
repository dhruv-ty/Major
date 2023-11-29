import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <BrowserRouter>
        
          <NavBar />
          <Welcome />
          <Services />
          <Transactions />
        <Footer />        
      </BrowserRouter>
      </div>
      
      
    </div>
    
  )
}

export default App
