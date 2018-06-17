import React from 'react'
import PropTypes from 'prop-types'

const InputForm = (props) =>
<form onSubmit={props.newGuestSubmitHandler}>
   <input
     type="text"
     onChange={props.handleNameInput}
     value={props.pendingGuest}
     placeholder="Invite Someone"
   />
   <button
     type="submit"
     value="submit"
     name="name"
     >
     Submit
   </button>
</form>

InputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}
export default InputForm
