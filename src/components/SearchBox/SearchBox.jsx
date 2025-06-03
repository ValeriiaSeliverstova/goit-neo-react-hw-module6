import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
