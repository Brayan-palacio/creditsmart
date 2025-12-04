import { 
  MdSecurity, 
  MdSpeed, 
  MdThumbUp,
  MdCompareArrows,
  MdSavings
} from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        <GiMoneyStack style={{ marginRight: "1rem" }} />
        Bienvenido a CreditSmart
      </h1>
      
      <p className="home-subtitle">
        Compara, elige y solicita el crédito perfecto para ti. 
        Encuentra las mejores opciones con tasas competitivas y condiciones transparentes.
      </p>

      <div style={{ 
        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem auto",
        boxShadow: "0 15px 35px rgba(67, 97, 238, 0.3)",
        animation: "float 3s ease-in-out infinite"
      }}>
        <MdCompareArrows style={{ fontSize: "5rem", color: "white" }} />
      </div>

      <div className="home-stats">
        <div className="stat-item">
          <div className="stat-value">
            <MdSpeed style={{ fontSize: "2.5rem", color: "var(--primary)" }} />
          </div>
          <div className="stat-label">Aprobación en 24h</div>
          <p style={{ fontSize: "0.9rem", color: "var(--gray)", marginTop: "0.5rem" }}>
            Proceso rápido y sencillo
          </p>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">
            <MdSecurity style={{ fontSize: "2.5rem", color: "var(--primary)" }} />
          </div>
          <div className="stat-label">100% Seguro</div>
          <p style={{ fontSize: "0.9rem", color: "var(--gray)", marginTop: "0.5rem" }}>
            Tus datos protegidos
          </p>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">
            <MdThumbUp style={{ fontSize: "2.5rem", color: "var(--primary)" }} />
          </div>
          <div className="stat-label">98% Satisfacción</div>
          <p style={{ fontSize: "0.9rem", color: "var(--gray)", marginTop: "0.5rem" }}>
            Clientes satisfechos
          </p>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">
            <MdSavings style={{ fontSize: "2.5rem", color: "var(--primary)" }} />
          </div>
          <div className="stat-label">Mejores tasas</div>
          <p style={{ fontSize: "0.9rem", color: "var(--gray)", marginTop: "0.5rem" }}>
            Compara y ahorra
          </p>
        </div>
      </div>
      
      <div style={{
        background: "white",
        borderRadius: "var(--border-radius)",
        padding: "2rem",
        marginTop: "3rem",
        boxShadow: "var(--box-shadow)"
      }}>
        <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>
          ¿Cómo funciona?
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          textAlign: "left"
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              1
            </div>
            <div>
              <h4>Compara</h4>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem" }}>
                Analiza diferentes créditos y sus condiciones
              </p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              2
            </div>
            <div>
              <h4>Elige</h4>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem" }}>
                Selecciona la opción que mejor se adapte a ti
              </p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              3
            </div>
            <div>
              <h4>Solicita</h4>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem" }}>
                Completa tu solicitud en línea de forma segura
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;