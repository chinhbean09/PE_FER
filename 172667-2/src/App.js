import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Home from './pages/Home';
import DetailNew from './components/DetailProduct'; 
import DashBoard from './components/DashBoard'; 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/detail/:id' element={<DetailNew />}></Route>
       <Route path='/dashboard' element={<DashBoard />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
