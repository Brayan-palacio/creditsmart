import { useState } from "react";
import creditsData from "../data/creditsData";
import CreditCard from "../components/CreditCard";
import SearchBar from "../components/SearchBar";

function Credits() {
  const [search, setSearch] = useState("");

  const filteredCredits = creditsData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Créditos Disponibles</h1>
      <p style={{ color: "var(--gray)", marginBottom: "1.5rem" }}>
        Explora nuestra selección de créditos diseñados para tus necesidades financieras
      </p>

      <SearchBar search={search} setSearch={setSearch} />
      
      {filteredCredits.length === 0 ? (
        <div style={{ 
          textAlign: "center", 
          padding: "3rem", 
          background: "white", 
          borderRadius: "var(--border-radius)",
          boxShadow: "var(--box-shadow)"
        }}>
          <p style={{ fontSize: "1.2rem", color: "var(--gray)" }}>
            No se encontraron créditos con "{search}"
          </p>
          <button 
            onClick={() => setSearch("")}
            style={{
              marginTop: "1rem",
              padding: "0.7rem 1.5rem",
              background: "var(--primary)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Mostrar todos
          </button>
        </div>
      ) : (
        <>
          <p style={{ color: "var(--gray)", marginTop: "1rem" }}>
            Mostrando {filteredCredits.length} crédito{filteredCredits.length !== 1 ? 's' : ''}
          </p>
          <div className="grid-cards">
            {filteredCredits.map((credit) => (
              <CreditCard key={credit.id} credit={credit} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Credits;