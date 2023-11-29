import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';

function App() {

  return (
    
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <NavBar />
        <Welcome />
        <Services />
      </div>
      
      <Transactions />
      <Footer />
    </div>
    
  )
}

export default App
