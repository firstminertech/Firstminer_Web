
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/Contect';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';


function App() {
  return (
 <Router>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/careers" element={<CareerPage/>}/>
    <Route exact path="/contact" element={<ContactPage/>}/>
    <Route exact path="/about" element={<AboutUs/>}/>
    <Route exact path="/service" element={<Service/>}/>
    
   </Routes>
   </Router>
  );
}

export default App;
