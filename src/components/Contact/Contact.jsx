import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <div className={css.contactData}>
        <p className={css.contactName}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button type="button" className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
