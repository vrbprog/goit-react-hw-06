import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
    const contactsList = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);
    console.log(filter);
    const filteredList = contactsList.filter((contact) =>
        contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    const listItems = filteredList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
    ));

    return <ul className={css.contactList}>{listItems}</ul>;
}
