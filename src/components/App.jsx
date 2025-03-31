import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

export default function App() {
    return (
        <main>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </main>
    );
}
