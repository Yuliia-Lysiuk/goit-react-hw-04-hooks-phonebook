import PropTypes from 'prop-types';
import { Button, Contact, Item, List, Text } from './ContactList.styled';

export function ContactList({ contacts, onClick, filterContacts }) {

    return (
    <div>
            {contacts.length === 0 ?
                (
                    <Text>No contacts added</Text>
            
                ) : (
                    filterContacts.length !== 0 ?
                        (<List>
                            {filterContacts.map(({ id, name, number }) => 
                                <Item key={id}>
                                    <Contact>{name}: {number}</Contact>
                                    <Button type="button" value={id} onClick={onClick}>Delete</Button>
                                </Item>
                            )}
                        </List >)
                    :(<Text>Nothing found</Text>))
            }
    </div>
    )   
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filteredContacts: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};