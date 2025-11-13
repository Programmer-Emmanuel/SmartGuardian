import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accueil } from "./Pages/Accueil";
import { Connexion } from "./Pages/Connexion";
import { Dashboard } from "./Pages/Dashboard";
import { DashboardAccueil } from "./components/DashboardAccueil";
import { Admins } from "./components/DashboardAdmins";
import { DashboardIncidents } from "./components/DashboardIncidents";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/dashboard" element={
          <Dashboard contenu={<DashboardAccueil />} />
        } />
        {/* <Route path="/dashboard/incidents" element={
          <Dashboard contenu={<DashboardIncidents />} />
        } />
        <Route path="/dashboard/historiques" element={
          <Dashboard contenu={<DashboardHistoriques />} />
        } />
        <Route path="/dashboard/statistiques" element={
          <Dashboard contenu={<DashboardStatistiques />} />
        } /> */}

        <Route path="/dashboard/admins" element={
          <Dashboard contenu={<Admins />} />
        } />

        <Route path="/dashboard/incidents" element={
          <Dashboard contenu={<DashboardIncidents />} />
        } />
      </Routes>
    </Router>
  );
}