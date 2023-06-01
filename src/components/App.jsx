// import { useEffect, useState} from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import css from './App.module.css'
import { useSelector } from 'react-redux';
import ContactListItem from './ContactsList/ContactListItem';







const App = () => {
 
  const contacts = useSelector((state) => state.contact.contacts)
  
  

  
    return (
    <div className={css.ContactsList}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <div className={css.ContactList__style}>
        <Form  />

        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
          <Filter />
          {contacts?.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
          />))}
        
        </div>
        
    </div>
  )
  }


export default App;








