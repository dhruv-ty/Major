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
import AddProfile from "./components/AddProfile";

function App() {

  return (
    <>
      <div className="min-h-screen gradient-bg-welcome">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/Sell' element={<Sell/>}/>
            <Route exact path='/MoreInfo' element={<MoreInfo/>}/>
            <Route exact path='/Transactions' element={<Transactions/>}/>
            <Route exact path='/AddProfile' element={<AddProfile/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
