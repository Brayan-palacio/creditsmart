import { Link, useLocation } from "react-router-dom";
import { MdHome, MdCreditCard, MdInfo } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <h2>
        <GiTakeMyMoney className="logo-icon" />
        CreditSmart
      </h2>

      <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""}
        >
          <MdHome className="nav-icon" />
          Inicio
        </Link>
        <Link 
          to="/credits" 
          className={location.pathname === "/credits" ? "active" : ""}
        >
          <MdCreditCard className="nav-icon" />
          Créditos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;