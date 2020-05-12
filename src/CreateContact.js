import React from 'react';
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import {  } from "module";

class CreateContact extends React.Component{
   

    handleSubmit = (event) => {
        event.preventDefault();
        
    }
    render(){
      
        return(
            <div>
                <Link className="close-create-contact"
                to="/"
                >Back to add contact</Link>
               <form onSubmit={this.handleSubmit} className="create-contact-form">
                <ImageInput className='create-contact-avatar-input' alt="dfds" name="avatarURL" maxHeight={64}/> 
                <div className="create-contact-details">
                    <input type="text" name="name"/>
                    <input type="text" name="handle"/>
                    <button>Add Contact</button>
                </div>
                </form>
            </div>
        )
    }
}

export default CreateContact;