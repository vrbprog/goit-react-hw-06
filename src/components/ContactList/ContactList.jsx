import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
    const contactsList = useSelector(selectContacts);
    const filter = useSelector(selectFilters);
    const filteredList = contactsList.filter((contact) =>
        contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    const listItems = filteredList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
    ));

    return <ul className={css.contactList}>{listItems}</ul>;
}
