import { Link } from "react-router-dom";
import { 
  MdAttachMoney, 
  MdTrendingUp, 
  MdArrowForward,
  MdCreditCard as CardIcon,
  MdCarRental,
  MdBusiness,
  MdSchool,
  MdHealthAndSafety,
  MdHome
} from "react-icons/md";
import { GiHouse } from "react-icons/gi";

// Mapeo de iconos según tipo de crédito
const creditIcons = {
  "personal": <CardIcon />,
  "hipoteca": <GiHouse />,
  "auto": <MdCarRental />,
  "negocio": <MdBusiness />,
  "educacion": <MdSchool />,
  "salud": <MdHealthAndSafety />
};

function CreditCard({ credit }) {
  // Determinar tipo de crédito basado en nombre
  const getCreditType = (name) => {
    if (name.includes("Personal")) return "personal";
    if (name.includes("Hipoteca")) return "hipoteca";
    if (name.includes("Auto")) return "auto";
    if (name.includes("Negocio")) return "negocio";
    if (name.includes("Educación")) return "educacion";
    if (name.includes("Salud")) return "salud";
    return "personal";
  };

  const creditType = getCreditType(credit.name);
  
  return (
    <div className="credit-card">
      <div className="card-header">
        <div className="card-icon-container">
          <span className="card-icon">
            {creditIcons[creditType] || <CardIcon />}
          </span>
        </div>
      </div>
      
      <h3>{credit.name}</h3>
      
      <div className="card-info">
        <div className="info-row">
          <MdAttachMoney className="row-icon" />
          <div>
            <p className="card-amount">${credit.maxAmount.toLocaleString()}</p>
            <p style={{ fontSize: "0.9rem" }}>Monto máximo</p>
          </div>
        </div>
        
        <div className="info-row">
          <MdTrendingUp className="row-icon" />
          <div>
            <span className="card-interest">
              {credit.interest}% TEA
            </span>
            <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>Tasa de interés anual</p>
          </div>
        </div>
      </div>
      
      <p style={{ 
        marginTop: "1rem", 
        fontSize: "0.9rem", 
        color: "#666",
        flexGrow: 1 
      }}>
        {credit.shortDescription || "Crédito personalizado para tus necesidades"}
      </p>

      <Link className="card-button" to={`/credit/${credit.id}`}>
        Ver detalles
        <MdArrowForward />
      </Link>
    </div>
  );
}

export default CreditCard;