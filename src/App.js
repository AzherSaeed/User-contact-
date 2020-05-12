import React from 'react';
import './App.css';
import ListContact from './ListContact'


class App extends React.Component{
  state = {
    contacts : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }

  DeleteContact  = (removeby) => {
    this.setState((currState) => ({
      contacts : currState.contacts.filter((c) => {
        return c.id !== removeby.id
      })
    }))
  }
  render() {
      return (
         <div>
          <ListContact contacts={this.state.contacts}
          DeleteContact={this.DeleteContact}
          />
         </div>
      )
  }
}

export default App;
