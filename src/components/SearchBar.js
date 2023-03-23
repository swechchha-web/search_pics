import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState(``);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // console.log("Hello Child class");
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search Your Desired Images</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
