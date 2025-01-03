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
          <h1>Membresía Holística</h1>
          <p>Desarrolla al máximo tu potencial</p>
          <div className="hero-buttons">
            <a onClick={scrollToBottom} className="hero-button">
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
  const colors = ["purple", "blue", "green", "orange", "blue"];

  return (
    <div className="Programa-wrapper">
      <div className="Programa">
        <h1>CILCA UN PROGRAMA HOLÍSTICO</h1>
        {/* <h1 class="wave-text">
          <span>C</span><span>I</span><span>L</span><span>C</span><span>A</span><span class="space"> </span>
          <span>U</span><span>N</span><span class="space"> </span>
          <span>P</span><span>R</span><span>O</span><span>G</span><span>R</span><span>A</span><span>M</span><span>A</span><span class="space"> </span>
          <span>H</span><span>O</span><span>L</span><span>I</span><span>S</span><span>T</span><span>I</span><span>C</span><span>O</span>
        </h1> */}

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



function StressInfo() {
  return (
      <div className="stress-info">
          <h2 className="title">EL ESTRÉS EN NUESTRO DÍA A DÍA</h2>
          <p className="intro-text">
              <u>México es el primer lugar a nivel mundial en estrés.</u> Representa un grave problema a nivel social y económico, ya que perjudica la salud y el rendimiento escolar y disminuye la productividad de las empresas.
          </p>

          <div className="sections-wrapper">
              <div className="sections-container">
                  <div className="section">
                      <div className="section-header">CONSECUENCIAS DE ESTRÉS EN NUESTRO LUGAR DE TRABAJO</div>
                      <div className="section-content">
                          <ul>
                              <li>Se generan sinergias negativas (deterioro de las relaciones laborales).</li>
                              <li>Aumento del absentismo.</li>
                              <li>Incremento de accidentes laborales.</li>
                              <li>Mayor número de bajas por enfermedad.</li>
                              <li>Bajo rendimiento por empleado.</li>
                              <li>Menor productividad.</li>
                              <li>Aumento de quejas por parte de los clientes teniendo menor nivel de satisfacción.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="section">
                      <div className="section-header">CONSECUENCIAS PSÍQUICAS E INDIVIDUALES</div>
                      <div className="section-content">
                          <ul>
                              <li>Deterioro cognitivo.</li>
                              <li>Dificultad para concentrarse.</li>
                              <li>Ansiedad y/o depresión.</li>
                              <li>Dificultad para tomar decisiones.</li>
                              <li>Insomnio.</li>
                              <li>Bajo rendimiento escolar.</li>
                              <li>Trastornos de tipo afectivo.</li>
                              <li>Desórdenes mentales como esquizofrenia o trastornos obsesivo-compulsivos.</li>
                              <li>Adicciones.</li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* Imagen posicionada en la esquina inferior derecha */}
              <img
                  src={'/assets/drawing1.PNG'}
                  alt="Imagen de referencia"
                  className="drawing1-image"
                  style={{ width: '350px', height: 'auto' }} // Ajusta el tamaño aquí
              />
          </div>
      </div>
  );
}




export default function HomePage() {
    return(
      <>
         <Hero/>
         <StressInfo/>
      </>
       
    )
}