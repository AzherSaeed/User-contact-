import React from 'react'
class ListContact extends React.Component{

    
    render(){
        const {contacts , DeleteContact } = this.props
        return(
            <ol>
                {
                    contacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                        <div
                          className='contact-avatar'
                          style={{
                            backgroundImage: `url(${contact.avatarURL})`
                          }}
                        ></div>
                        <div className='contact-details'>
                          <p>{contact.name}</p>
                          <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove' onClick={() => DeleteContact(contact)}>
                          Remove
                        </button>
                      </li>
                   
                    ))
                }
            </ol>
        )
    }
}

export default ListContact;