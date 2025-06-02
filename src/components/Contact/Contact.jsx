import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, number, onDeleteContact }) {
  return (
    <li className={css.contact}>
      <div className={css.contactData}>
        <p className={css.contactName}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.deleteButton}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
}
