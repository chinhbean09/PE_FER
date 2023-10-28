import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
       <Route>
        
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
