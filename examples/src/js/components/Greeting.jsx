import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ message = '' }) => (
  <h1>{message}</h1>
)

Greeting.propTypes = {
  message: PropTypes.string
}

export default Greeting
