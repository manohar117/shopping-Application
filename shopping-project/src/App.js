import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ShoppingApplication from './components/ShoppingApplication';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import AllProducts from './components/AllProducts';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import Loginas from './components/Loginas';
import Customerlogin from './components/Customerlogin';
import Customerview from './components/Customerview';




function App() {
  return (
    <div className="App" >
      <style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>
      <BrowserRouter>
      <NavBar/>
        <Routes >
          <Route path="/" element={<ShoppingApplication/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/all" element={<AllProducts/>}/>
          <Route path='/edit/:pid' element={<EditProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loginas' element={<Loginas/>}/>
          <Route path='/customerlogin' element={<Customerlogin/>}/>
          {/* <Route path='/available' element={<Availableproducts/>}/> */}
          {/* <Route path='/logout' element={<Logout/>}/> */}
          <Route path="/view" element={<Customerview/>}/>
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
