import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AllRooms from './views/Allrooms/AllRooms'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/allrooms" element={<AllRooms/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
