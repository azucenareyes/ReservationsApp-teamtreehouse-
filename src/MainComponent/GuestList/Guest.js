import React from 'react'
import PropTypes from 'prop-types'
import GuestName from './GuestName'

const Guest = (props) =>

    <li>
      <GuestName
        isEditing={props.isEditing}
        toggleEditing={e => props.setName(e.target.value)}
        >
        {props.name}
      </GuestName>
      <label>
      <input
        type=    "checkbox"
        checked=  {props.isConfirmed}
        onChange=  {props.toggleConfirmed}
        /> Confirmed
      </label>
      <button onClick={props.toggleEditing}>
       {props.isEditing? "save" : "edit"}
     </button>
      <button onClick={props.remove}>remove</button>
    </li>

    Guest.propTypes = {
       name: PropTypes.string.isRequired,
       isConfirmed: PropTypes.bool.isRequired,
       isEditing: PropTypes.bool.isRequired,
       toggleConfirmed: PropTypes.func.isRequired,
       toggleEditing: PropTypes.func.isRequired,
       setName: PropTypes.func.isRequired,
       remove: PropTypes.func.isRequired
    };


export default Guest
