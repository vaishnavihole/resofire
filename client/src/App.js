import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import AllRooms from './views/AllRooms/AllRooms'
import BookMyRoom from './views/BookMyRoom/BookMyRoom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/allrooms" element={<AllRooms/>}/>
    <Route path="/bookmyroom" element={<BookMyRoom/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
