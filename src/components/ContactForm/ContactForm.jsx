import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

export default function ContactForm({ onAddContact }) {
  const usernameId = useId();
  const numberId = useId();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Must be at least 7 digits")
      .max(15, "Must be at most 15 digits")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={usernameId}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="username"
          id={usernameId}
        />
        <ErrorMessage className={css.error} name="username" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field className={css.input} type="tel" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.addContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
