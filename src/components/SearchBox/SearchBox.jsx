import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        className={css.searchInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}
