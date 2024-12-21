
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import CareerPage from './pages/CareerPage';


function App() {
  return (
 <Router>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/careers" element={<CareerPage/>}/>
    
   </Routes>
   </Router>
  );
}

export default App;
