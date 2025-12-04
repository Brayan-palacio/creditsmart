import { useParams, Link } from "react-router-dom";
import creditsData from "../data/creditsData";
import { 
  MdArrowBack,
  MdAttachMoney,
  MdTrendingUp,
  MdAccessTime,
  MdSecurity,
  MdCheckCircle,
  MdSend
} from "react-icons/md";
import { 
  GiHouse,
  GiCarKey,
  GiGraduateCap,
  GiHealthNormal,
  GiBriefcase,
  GiWallet
} from "react-icons/gi";

function CreditDetail() {
  const { id } = useParams();
  const credit = creditsData.find((c) => c.id === parseInt(id));

  const getCreditIcon = (name) => {
    if (name.includes("Personal")) return <GiWallet className="detail-icon" />;
    if (name.includes("Hipoteca")) return <GiHouse className="detail-icon" />;
    if (name.includes("Auto")) return <GiCarKey className="detail-icon" />;
    if (name.includes("Negocio")) return <GiBriefcase className="detail-icon" />;
    if (name.includes("Educación")) return <GiGraduateCap className="detail-icon" />;
    if (name.includes("Salud")) return <GiHealthNormal className="detail-icon" />;
    return <GiWallet className="detail-icon" />;
  };

  if (!credit) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
          Crédito no encontrado
        </h2>
        <p style={{ color: "var(--gray)", marginBottom: "2rem" }}>
          El crédito que buscas no está disponible o ha sido removido.
        </p>
        <Link to="/credits" className="back-button">
          <MdArrowBack />
          Volver a créditos
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/credits" className="back-button">
        <MdArrowBack />
        Volver a créditos
      </Link>
      
      <div className="detail-box">
        <div className="detail-header">
          <div>
            <div className="detail-icon-container">
              {getCreditIcon(credit.name)}
            </div>
            <h1>{credit.name}</h1>
            <p style={{ color: "var(--gray)" }}>{credit.tagline || "Crédito personalizado"}</p>
          </div>
          <span className="detail-interest">
            <MdTrendingUp />
            {credit.interest}% TEA
          </span>
        </div>
        
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "1rem",
          marginBottom: "2rem" 
        }}>
          <MdAttachMoney style={{ fontSize: "2.5rem", color: "var(--primary)" }} />
          <div>
            <p className="detail-amount">${credit.maxAmount.toLocaleString()}</p>
            <p style={{ color: "var(--gray)" }}>Monto máximo disponible</p>
          </div>
        </div>
        
        <div className="detail-features">
          <div className="feature-item">
            <MdAccessTime className="feature-icon" />
            <div><strong>Aprobación rápida</strong></div>
            <div style={{ fontSize: "0.9rem", color: "var(--gray)" }}>24-48 horas</div>
          </div>
          <div className="feature-item">
            <MdSecurity className="feature-icon" />
            <div><strong>Seguro incluido</strong></div>
            <div style={{ fontSize: "0.9rem", color: "var(--gray)" }}>Protección completa</div>
          </div>
          <div className="feature-item">
            <MdCheckCircle className="feature-icon" />
            <div><strong>Sin penalidades</strong></div>
            <div style={{ fontSize: "0.9rem", color: "var(--gray)" }}>Pago anticipado</div>
          </div>
        </div>
        
        <h3 style={{ marginTop: "2rem" }}>
          <MdCheckCircle style={{ marginRight: "0.5rem", color: "var(--primary)" }} />
          Descripción
        </h3>
        <div className="detail-description">
          {credit.description || "Este crédito ofrece condiciones competitivas y flexibles adaptadas a tus necesidades financieras. Diseñado para brindarte la mejor experiencia crediticia con tasas preferenciales y un proceso de aprobación simplificado."}
        </div>
        
        <h3 style={{ marginTop: "2rem" }}>
          <MdCheckCircle style={{ marginRight: "0.5rem", color: "var(--primary)" }} />
          Beneficios
        </h3>
        <ul style={{ 
          listStyle: "none", 
          padding: "1rem", 
          background: "rgba(67, 97, 238, 0.05)",
          borderRadius: "10px",
          marginTop: "1rem"
        }}>
          <li style={{ padding: "0.5rem 0", display: "flex", alignItems: "center" }}>
            <MdCheckCircle style={{ color: "var(--success)", marginRight: "0.5rem" }} />
            Sin comisión por apertura
          </li>
          <li style={{ padding: "0.5rem 0", display: "flex", alignItems: "center" }}>
            <MdCheckCircle style={{ color: "var(--success)", marginRight: "0.5rem" }} />
            Seguro de desgravamen incluido
          </li>
          <li style={{ padding: "0.5rem 0", display: "flex", alignItems: "center" }}>
            <MdCheckCircle style={{ color: "var(--success)", marginRight: "0.5rem" }} />
            Posibilidad de refinanciamiento
          </li>
          <li style={{ padding: "0.5rem 0", display: "flex", alignItems: "center" }}>
            <MdCheckCircle style={{ color: "var(--success)", marginRight: "0.5rem" }} />
            Atención personalizada 24/7
          </li>
        </ul>
        
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <button className="card-button" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
            <MdSend style={{ fontSize: "1.3rem" }} />
            Solicitar este crédito
          </button>
          <p style={{ color: "var(--gray)", marginTop: "1rem", fontSize: "0.9rem" }}>
            Aprobación sujeta a evaluación crediticia
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditDetail;