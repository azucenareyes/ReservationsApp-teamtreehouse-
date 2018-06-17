import React from 'react'
import PropTypes from 'prop-types'
import InputForm from './InputForm'

const Header = (props) =>
  <div >
    <header>
      <h1>RSVP</h1>
      <p>A treehouse App</p>
      <InputForm
        newGuestSubmitHandler= {props.newGuestSubmitHandler}
        handleNameInput={props.handleNameInput}
        pendingGuest={props.pendingGuest}
        />
    </header>
  </div>

Header.propTypes ={
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default Header
