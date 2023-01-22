 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';  
 import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import Restaurant from './Projects/Restaurant-Menu-Filter/Restaurant'; 
import Home from './Components/Home';



function App() {
  return (
    <div className="App"> 
        <Header /> 
          <Routes> 
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Restaurant />} />
          </Routes>  
    </div>
  );
}

export default App;
