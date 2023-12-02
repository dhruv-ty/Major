import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Sell from "./components/Sell";
import MoreInfo from "./components/MoreInfo";
import Transactions from "./components/Transactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <div className="min-h-screen gradient-bg-welcome">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/MoreInfo' element={<MoreInfo/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </>
    // <div className='min-h-screen'>
    //    <div className='gradient-bg-welcome'>
    //     <BrowserRouter>
    //     <NavBar />

    //       <Routes>
    //         <Route exact path='/Profile' element={<Profile/>}/>
    //       </Routes>
    //     </BrowserRouter>
    //       <Welcome />
    //       <Services />
    //       <MoreInfo />
    //       <Sell />

    //   </div>

    // </div>
  );
}

export default App;
