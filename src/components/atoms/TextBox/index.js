import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../../utils'

const TextBox = ({ x, y, width, height, children }) => (
  <g transform={`translate(${x - (width / 2)}, ${y - (height / 2)})`}>
    <rect
      width={width}
      height={height}
      stroke={theme.color.pink}
      fill={theme.color.white}
    />
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

TextBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node
}

export default TextBox