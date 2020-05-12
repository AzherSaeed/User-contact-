import React from 'react';
import './App.css';
import ListContact from './ListContact';
import { Route } from 'react-router-dom';
import * as ContactsAPI from './utils/ContactsAPI'


class App extends React.Component{
  state = {
    contacts : []
  }

  componentDidMount(){
    ContactsAPI.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
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
