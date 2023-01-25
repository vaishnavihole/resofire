import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AllRooms from './views/AllRooms/AllRooms';
import Dashboard from './views/Dashboard/Dashboard';
import BookMyRoom from './views/BookMyRoom/BookMyRoom';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/allrooms" element={<AllRooms/>}/>
    <Route path="/bookmyroom" element={<BookMyRoom/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
