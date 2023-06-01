import React from 'react';
import css from './Form.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "features/contactSlice";
import { v4 } from 'uuid';





 const Form = () => {
     const dispatch = useDispatch()
     const [nameContact, setNameContact] = React.useState('')
     const [numberContact, setNumberContact] = React.useState('')

    const addContactHandler = () => {
      const contact = {
        id: v4(),
        name: nameContact,
        number: numberContact,
        }
        
        dispatch(addContact(contact))
        setNameContact('')
        setNumberContact('')
    }
    
    
        
        return (
            <form  className={css.Form}>

                <label  className={css.Form__inputLabel}>
                    <p>Name:</p>
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                onChange={e => setNameContact(e.target.value)}
                value={nameContact}
                className={css.Form__input}
                    />
            </label>
                
                <label  className={css.Form__inputLabel}>
                    <p>Number:</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter phone number"
                    value={numberContact}
                    onChange={e => setNumberContact(e.target.value)}
                    className={css.Form__input}
                    />
                </label>
                
                <button
                    onClick={()=> addContactHandler()}
                    type="submit"
                    className={css.Form__button}> Add contact</button>
            </form>
        )
    }







export default Form;