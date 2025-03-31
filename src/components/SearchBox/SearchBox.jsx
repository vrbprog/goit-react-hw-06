import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export default function SearchBox() {
    const filter = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div>
            <label className={s.label}>
                <span>Find contacts by name:</span>
                <input
                    value={filter}
                    onChange={handleSearch}
                    className={s.input}
                    type="text"
                    name="name"
                />
            </label>
        </div>
    );
}
