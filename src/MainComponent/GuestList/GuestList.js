import React from 'react'
import PropTypes from 'prop-types'
import Guest from './Guest';
import Pending from './Pending'

const GuestList = (props) =>


      <ul>
        <Pending name={props.pendingGuest} />

        {props.guests
          .filter(guest=>!props.isFiltered||guest.isConfirmed)
          .map((guest) =>
          <Guest
            key = {guest.id}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}

            toggleConfirmed={() => props.toggleConfirmed(guest.id)}
            toggleEditing={() =>props.toggleEditing(guest.id)}
            setName= {text =>props.setName(text, guest.id)}
            remove = { () =>props.remove(guest.id)}
          />
        )}
      </ul>;



      GuestList.propTypes = {
         guests: PropTypes.array.isRequired,
         toggleConfirmed: PropTypes.func.isRequired,
         toggleEditing: PropTypes.func.isRequired,
         setName: PropTypes.func.isRequired,
         isFiltered: PropTypes.bool.isRequired,
         remove: PropTypes.func.isRequired,
         pendingGuest: PropTypes.string.isRequired
      }



export default GuestList
