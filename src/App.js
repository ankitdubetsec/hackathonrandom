import React from "react"

import './App.css';
import './component/style.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';
import User from './component/User'
import './component/style.css';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Userdashboardapp from "./Userdashboardapp";
import Login from '../src/Pages/Login';
import Copy from './Copy'
import Profile from "./Pages/Profile";
import Scholorship from "./Scholorship";
function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
         <Route path="/login" element={<Login/>} /> 
        <Route exact path='/register' element={<RegistrationForm/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/userdashboard' element={<Userdashboardapp/>} />
        <Route exact path='/admin' element={<Copy/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/scholarship' element={<Scholorship/>} />
       </Routes>
       {/* <Footer /> */}
   </Router>
    </div>
  );
}

export default App;
