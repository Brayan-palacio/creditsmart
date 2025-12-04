import { MdSearch } from "react-icons/md";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <MdSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Buscar por nombre, tipo o características..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;