import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
    name: "",
    number: "",
};

const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (value, actions) => {
        const newContact = {
            id: uuidv4(),
            name: value.name,
            number: value.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    const validSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        number: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
    });

    return (
        <div className={s.formWrapper}>
            <Formik
                onSubmit={handleSubmit}
                initialValues={INITIAL_STATE}
                validationSchema={validSchema}
            >
                <Form className={s.form}>
                    <label className={s.label}>
                        <span>Name:</span>
                        <Field className={s.input} type="text" name="name" />
                        <ErrorMessage name="name" />
                    </label>

                    <label className={s.label}>
                        <span>Number:</span>
                        <Field className={s.input} type="text" name="number" />
                        <ErrorMessage name="number" />
                    </label>

                    <button className={s.button} type="submit">
                        Add Contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;
