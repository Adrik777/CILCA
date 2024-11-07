import { Routes, Route, Link } from "react-router-dom";
import "./NavBar.css"; // Importa el archivo CSS
import HomePage from "./HomePage/HomePage.js";
import Cursos from "./Cursos/Cursos.js";
import Beca from "./Beca/Beca.js";
import Contacto from "./Contacto/Contacto.js";
import Equipo from "./Equipo/Equipo.js";
import Membresia from "./Membresia/Membresia.js";

function NavBar() {
  return (
    <div> 
      <nav className="navbar">
        
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img
            src="/assets/cilcaLogo.png"
            alt="CILCA Logo"
          />
          <span className="nav-logo-text">CILCA</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/cursos" className="nav-item">Cursos</Link>
          <Link to="/membresia" className="nav-item">Membresía</Link>
          <Link to="/equipo" className="nav-item">Equipo</Link>
          <Link to="/beca" className="nav-item">Beca un niño</Link>
          <Link to="/contacto" className="nav-item">Contacto</Link>
        </div>

        {/* Sign in Button */}
        <Link to="/signin" className="nav-signin">Sign in</Link>

      </nav>

      {/* Routes */}
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/membresia" element={<Membresia />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/beca" element={<Beca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default NavBar;
