import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextBox } from '../atoms'
import {
  ComparisonGroup,
  RelationshipGroup,
  DistributionGroup,
  CompositionGroup
} from '../composites'
import { chartGroups } from '../../utils'

class ClassSuggestionPage extends Component {
  render() {
    const {
      width,
      height
    } = this.props

    const rectWidth = width / 8
    const rectHeight = height / 7

    return (
      <div ref={this.ref}>
        <svg width={width} height={height} fill={'none'}>
          <rect width={width} height={height} />
          
          <ComparisonGroup
            rectWidth={rectWidth}
            rectHeight={rectHeight}
            chartGroup={chartGroups.comparison}
          />
          <RelationshipGroup
            rectWidth={rectWidth}
            rectHeight={rectHeight}
            chartGroup={chartGroups.relationship}
          />
          <DistributionGroup
            rectWidth={rectWidth}
            rectHeight={rectHeight}
            chartGroup={chartGroups.distribution}
          />
          <CompositionGroup
            rectWidth={rectWidth}
            rectHeight={rectHeight}
            chartGroup={chartGroups.composition}
          />

          <TextBox
            x={width / 2}
            y={height / 2}
            width={rectWidth * 2}
            height={rectHeight}
          >Select a Chart</TextBox>
        </svg>
      </div>
    )
  }
}

ClassSuggestionPage.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

ClassSuggestionPage.defaultProps = {
  width: '1280',
  height: '720'
}

export default ClassSuggestionPage