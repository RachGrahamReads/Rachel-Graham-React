import React from 'react'

import PropTypes from 'prop-types'

import './coming-books.css'

const ComingBooks = (props) => {
  return (
    <div className={`coming-books-feature-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="coming-books-image"
      />
      <h2 className="coming-books-text">{props.title}</h2>
      <span className="coming-books-text1">{props.about}</span>
    </div>
  )
}

ComingBooks.defaultProps = {
  text: 'Text',
  about: 'About the book',
  imageSrc: '/covercomingsoon-1400w.jpeg',
  rootClassName: '',
  imageAlt: 'image',
  title: 'Book title',
  button: 'Learn more',
}

ComingBooks.propTypes = {
  text: PropTypes.string,
  about: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.string,
}

export default ComingBooks
