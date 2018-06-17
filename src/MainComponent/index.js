import React from 'react'
import PropTypes from 'prop-types'
import Filtered from './Filtered'
import Counter from './Counter'
import GuestList from './GuestList/GuestList'

const MainComponent = (props) =>

  <div className="main">


      <Filtered
        isFiltered= {props.isFiltered}
        toggleFiltered= {props.toggleFiltered}
        />
    <Counter
      totalInvited={props.invited}
      numberAttending={props.going}
      numberUnconfirmed={props.notsure}
      />

  <GuestList
    toggleConfirmed={props.toggleConfirmed}
    toggleEditing={props.toggleEditing}
    guests={props.guests}
    setName={props.setName}
    isFiltered={props.isFiltered}
    remove={props.remove}
    pendingGuest={props.pendingGuest}
  />
</div>


MainComponent.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  toggleFiltered: PropTypes.func.isRequired,
  totalInvited: PropTypes.number,
  totalAttending: PropTypes.number,
  totalUnconfirmed: PropTypes.number,
  toggleConfirmed:PropTypes.func.isRequired,
  toggleEditing:PropTypes.func.isRequired,
  guests:PropTypes.array.isRequired,
  setName:PropTypes.func.isRequired,
  remove:PropTypes.func.isRequired,
  pendingGuest:PropTypes.string.isRequired,

}

export default MainComponent
