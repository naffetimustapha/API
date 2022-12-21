
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Error from './Pages/Error';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';
import Footerr from './Components/Footerr';

function App() {
  return (
    <div className="App">
     
      <NavBar/>
    
  <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/Users' element ={<Users/>} />
    <Route path='/user/:id' element ={<Profile/>} />
    <Route path='/Admin' element ={<Admin/>} />
    <Route path='/*' element ={<Error/>} />
  </Routes>
  <br />
  <Footerr/>
    </div>
  );
}

export default App;
