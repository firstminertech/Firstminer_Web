
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/Contect';
import OurTeams from './pages/OurTeams';
import CreateTeam from './pages/admin/teams/createTeam';
import GetTeamTable from './pages/admin/teams/getTeamTable';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import ShowContact from './pages/admin/contacts/ShowContacts';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ShoowClients from './pages/admin/clients/ShowClients';
import AddClient from './pages/admin/clients/AddClient';
import ClientPage from './elements/ClientPage';
import Portfolio from './elements/Portfolio';


function App() {
  return (
 <Router>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/careers" element={<CareerPage/>}/>
    <Route exact path="/contact" element={<ContactPage/>}/>
    <Route exact path="/our-teams" element={<OurTeams/>}/>
    <Route exact path="/about" element={<AboutUs/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/clients" element={<ClientPage/>}/>
    <Route exact path="/portfolio" element={<Portfolio/>}/>

    <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
    <Route exact path="/admin/add-team" element={<CreateTeam/>}/>
    <Route exact path="/admin/get-teams-details/:id" element={<CreateTeam/>}/>
    <Route exact path="/admin/get-teams-details" element={<GetTeamTable/>}/>
    <Route exact path="/admin/contacts" element={<ShowContact/>}/>
    <Route exact path="/admin/clients" element={<ShoowClients/>}/>
    <Route exact path="/admin/add-client" element={<AddClient/>}/>
   </Routes>
   </Router>
  );
}

export default App;
