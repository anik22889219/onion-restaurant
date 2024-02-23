
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import Home from './Pages/Home/Home/Home';
import Shop from './Pages/Home/Shop/Shop';
import Login from './Pages/Home/Registretion/Login/Login';
import Singup from './Pages/Home/Registretion/Singup/Singup';
import Breakfast from './Pages/Meals/Breakfast/Breakfast';
import Lunch from './Pages/Meals/Lunch/Lunch';
import Dinner from './Pages/Meals/Dinner/Dinner';
import Foter from './Pages/Foter/Foter';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/shop' element={<Shop></Shop>} />
        <Route path="/breakfast" element={<Breakfast></Breakfast>} />
        <Route path="/lunch" element={<Lunch></Lunch>} />
        <Route path="/dinner" element={<Dinner></Dinner>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        
      </Routes>
      <Foter></Foter>
      
    </div>
  );
}

export default App;
