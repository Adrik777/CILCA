import {React,useRef} from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const bottomSectionRef = useRef(null);

  // Función para desplazarse hacia abajo suavemente
  const scrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <header className="hero">
      <div className="hero-content">
        <h1>Membresía holística</h1>
        <p>Desarrolla al máximo tu potencial</p>
        <div className="hero-buttons">
          <a onClick={scrollToBottom} href="#bottom-section" className="hero-button">
            Conoce más
            <img src="/assets/camera.PNG" alt="Orchid icon" className="button-icon" />
          </a>
          <Link to="/cursos" className="hero-button secondary-button">
            Explora Cursos
            <img src="/assets/arrow.PNG" alt="Orchid icon" className="button-icon" />
          </Link>
        </div>
      </div>
      
    </header>
    <div ref={bottomSectionRef} id="bottom-section">
      <Section/>
    </div>
    </>
  );
};


const Section = () => {
  // Array con las rutas de los íconos a mostrar
  const icons = [
    "/assets/icon_lotus.png",
    "/assets/orchid.png",
    "/assets/planta.png",
  ];

  // Array con los nombres de cada sección o actividad
  const items = [
    "HABILIDADES ARTÍSTICAS",
    "SALUD FÍSICA",
    "MEDITACIÓN",
    "TÉCNICAS DE RELAJACIÓN",
    "INTELIGENCIA EMOCIONAL",
    "YOGA",
    "EMPRENDER",
    "LIDERAZGO",
    "TÉCNICAS DE AUTODEFENSA",
    "PENSAMIENTO CIENTÍFICO",
  ];

  // Array de colores para las tarjetas
  const colors = ["purple", "blue", "green", "orange", "red"];

  return (
    <div className="Programa-wrapper">
      <div className="Programa">
        <h1 class="wave-text">
          <span>C</span><span>I</span><span>L</span><span>C</span><span>A</span><span class="space"> </span>
          <span>U</span><span>N</span><span class="space"> </span>
          <span>P</span><span>R</span><span>O</span><span>G</span><span>R</span><span>A</span><span>M</span><span>A</span><span class="space"> </span>
          <span>H</span><span>O</span><span>L</span><span>I</span><span>S</span><span>T</span><span>I</span><span>C</span><span>O</span>
        </h1>

        <p>
          <b>CILCA es un programa holístico que está enfocado en desarrollar y
          maximizar el potencial de la persona.</b> Buscando que a través de este
          programa puedas desarrollar la mejor versión de ti mismo.
        </p>

        {/* Grid de íconos */}
        <div className="icon-grid">
          {items.map((item, index) => (
            <div key={index} className="icon-box-wrapper">
              <div className={`icon-box ${colors[index % colors.length]}`}>
                <img
                  src={icons[index % icons.length]} // Cambia de ícono cada tres elementos
                  alt={item}
                  className="lotus-icon"
                />
              </div>
              <div className="icon-label">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
    return(
      <>
         <Hero/>
      </>
       
    )
}