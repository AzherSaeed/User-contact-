import React from 'react'

class CreateContact extends React.Component{
   

    handleSubmit = (event) => {
        event.preventDefault();
      
        
    }
    render(){
      
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="type contact name"/>
                    <button>Submit Contact</button>
                </form>
            </div>
        )
    }
}

export default CreateContact;