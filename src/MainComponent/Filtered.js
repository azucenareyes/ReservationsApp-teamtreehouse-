import React from 'react'
import PropTypes from 'prop-types'

const Filtered = (props) =>
<div>
  <h2>Invitees</h2>
    <label>
      <input
        type="checkbox"
        checked={props.isFiltered}
        onChange={props.toggleFiltered}
      />
        Hide those who havent responded
      </label>
</div>

 Filtered.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  toggleFiltered: PropTypes.func.isRequired,
}

export default Filtered
