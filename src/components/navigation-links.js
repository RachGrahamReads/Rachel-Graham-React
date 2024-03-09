import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.about}</span>
      <span className="navigation-links-text1">{props.books}</span>
      <span className="navigation-links-text2">{props.contact}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  contact: 'Contact',
  books: 'Books',
  about: 'About',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  contact: PropTypes.string,
  books: PropTypes.string,
  about: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
