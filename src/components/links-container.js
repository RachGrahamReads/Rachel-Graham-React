import React from 'react'

import PropTypes from 'prop-types'

import './links-container.css'

const LinksContainer = (props) => {
  return (
    <div className="links-container-links-container">
      <span className="links-container-text">{props.text}</span>
      <span className="links-container-text1">{props.text1}</span>
      <span className="links-container-text2">
        <span>Books</span>
        <br></br>
      </span>
      <span className="links-container-text5">{props.text2}</span>
    </div>
  )
}

LinksContainer.defaultProps = {
  text2: 'Contact',
  text1: 'About',
  text: 'Home',
}

LinksContainer.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default LinksContainer
