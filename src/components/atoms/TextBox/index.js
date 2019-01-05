import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../../utils'

const TextBox = ({
    offset,
    rect,
    text,
    children
  }) => (
  <g transform={`translate(${offset.x}, ${offset.y})`}>
    <rect 
      width={rect.width}
      height={rect.height}
      fill={rect.fill}
      stroke={rect.stroke}
    />
    <text
      x={text.x}
      y={text.y}
      fill={text.fill}
      textAnchor={text.textAnchor}
      alignmentBaseline={text.alignmentBaseline}
    >
      {children}
    </text>
  </g>
)

TextBox.propTypes = {
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  rect: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string
  }),
  text: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    fill: PropTypes.string,
    textAnchor: PropTypes.string,
    alignmentBaseline: PropTypes.string
  })
}

TextBox.defaultProps = {
  offset: {
    x: 0,
    y: 0
  },
  rect: {
    width: 400,
    height: 150,
    fill: theme.color.white,
    stroke: theme.color.pink
  },
  text: {
    x: 200,
    y: 75,
    fill: theme.color.black,
    textAnchor: 'middle',
    alignmentBaseline: 'middle'
  }
}

export default TextBox