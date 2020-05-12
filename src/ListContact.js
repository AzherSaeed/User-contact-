import React from 'react'

class ListContact extends React.Component{
    state = {
        query : ''
    }

    handleQuery = (query) => {
        this.setState(() => ({
            query : query.trim()
        }))
    }
    
    render(){
        const {contacts , DeleteContact } = this.props
        const { query } = this.state

        const trimContact = query === '' ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ))
        return(
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input type="text" value={query} 
                    onChange={(event) => this.handleQuery(event.target.value)}
                    className="search-contacts" 
                    placeholder="Search contact"/>
                </div>
                 <ol>
                {
                    trimContact.map((contact) => (
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
            </div>
           
        )
    }
}

export default ListContact;