import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { range } from 'd3-array'
import { theme } from '../../utils'

const Box = ({ x, y, width, height }) => (
  <rect
    width={width}
    height={height}
    stroke={theme.color.black}
    x={x}
    y={y}
    fill={theme.color.white}
  />
)

const TextBox = ({ x, y, width, height, children }) => (
  <g transform={`translate(${x - (width / 2)}, ${y - (height / 2)})`}>
    <rect width={width} height={height} stroke={theme.color.pink} />
    <text
      x={width / 2}
      y={height / 2}
      fill={theme.color.black}
      textAnchor={'middle'}
      alignmentBaseline={'middle'}
    >
      {children}
    </text>
  </g>
)

class ClassSuggestionPage extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    
    this.state = {
      width: null,
      height: null
    }
  }

  componentDidMount() {
    this.setState({
      width: this.ref.current.clientWidth,
      height: this.ref.current.clientHeight
    })
  }

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
          
          {range(0,8).map((d, i) => (
            <Box
              width={rectWidth}
              height={rectHeight}
              x={(rectWidth) * (i)}
              y={0}
              key={`comparison-${i}`}
            />))
          }

          <g transform={`translate(0, ${rectHeight * 2})`}>
            {range(0,2).map((d, i) => (
              <Box
                width={rectWidth}
                height={rectHeight}
                x={0}
                y={rectHeight * i}
                key={`relationship-${i}`}
              />
            ))}
          </g>

          <g transform={`translate(${rectWidth * 7}, ${rectHeight * 2})`}>
            {range(0,4).map((d, i) => (
              <Box
                width={rectWidth}
                height={rectHeight}
                x={0}
                y={rectHeight * i}
                key={`distribution-${i}`}
              />
            ))}
          </g>

          <g transform={`translate(0, ${rectHeight * 6})`}>
            {range(0,7).map((d, i) => (
              <Box
                width={rectWidth}
                height={rectHeight}
                x={rectWidth * i}
                y={0}
                key={`composition-${i}`}
              />
            ))}
          </g>

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