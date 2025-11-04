import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accueil } from "./Pages/Accueil";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  );
}
