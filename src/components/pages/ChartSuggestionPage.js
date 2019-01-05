import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassSuggestionPage extends Component {
  render() {
    const {
      width,
      height
    } = this.props

    return (
      <svg width={width} height={height}>
        <rect width={200} height={200} fill={'pink'} />
      </svg>
    )
  }
}

ClassSuggestionPage.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

ClassSuggestionPage.defaultProps = {
  width: '100vw',
  height: '100vh'
}

export default ClassSuggestionPage