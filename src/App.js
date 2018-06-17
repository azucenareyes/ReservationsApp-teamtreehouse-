import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MainComponent from './MainComponent'

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

   lastId = 0;

  myId = () => {
    const id = this.lastId;
      this.lastId += 1;
    return id;
  };

remove = id => {
  this.setState({
    guests:this.state.guests.filter((guest) => id !== guest.id)
  });
}

  toggleFiltered= () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });


  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map((guest) =>{
        if(id === guest.id){
          return {
          ...guest,
          [property]: !guest[property]
         };
        }
        return guest;
      })
    });

    setName = (name, id) =>
      this.setState({
        guests: this.state.guests.map((guest) =>{
          if(id === guest.id){
            return {
            ...guest,
            name
           };
          }
          return guest;
        })
      });



    handleNameInput = e => this.setState({
      pendingGuest: e.target.value,
    });

    newGuestSubmitHandler = e =>{
      e.preventDefault();
      const id = this.myId()
      this.setState({
        guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
          ...this.state.guests
        ],
        pendingGuest:''
      });
    }

    toggleConfirmed = id =>
    this.toggleGuestProperty("isConfirmed", id);

    removeMe = id =>
    this.toggleGuestProperty("isConfirmed", id);


    toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

 getTotalInvited = () => this.state.guests.length;

 getTotalAttending = () =>
  this.state.guests.reduce(
    (total, accum) =>
    accum.isConfirmed? total +  1 : total
  ,0);


  render() {
    const totalAttending = this.getTotalAttending()
    const totalInvited = this.getTotalInvited()
    const totalUnconfirmed =totalInvited - totalAttending

  return (
      <div className="App">
        <Header
          newGuestSubmitHandler= {this.newGuestSubmitHandler}
          handleNameInput= {this.handleNameInput}
          pendingGuest= {this.state.pendingGuest}
        />
      <MainComponent
       isFiltered= {this.state.isFiltered}
       toggleFiltered= {this.toggleFiltered}
       totalInvited={totalInvited}
       totalAttending={totalAttending}
       totalUnconfirmed={totalUnconfirmed}
       toggleConfirmed={this.toggleConfirmed}
       toggleEditing={this.toggleEditing}
       guests={this.state.guests}
       setName={this.setName}
       remove={this.remove}
       pendingGuest={this.state.pendingGuest}
       />
      </div>
    );
  }
}

export default App;
