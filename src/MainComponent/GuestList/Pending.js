import React from 'react'
import PropTypes from 'prop-types'



const Pending = (props) =>
  props.name?
    <li className="pending">
      <span>{props.name}</span>
    </li>
    :
    null

    Pending.propTypes = {
       name: PropTypes.string.isRequired
    };


export default Pending
