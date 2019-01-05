import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '../../../utils'

const Box = ({ x, y, width, height, children, ...props }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    {...props}
  >
    {children}
  </rect>
)

Box.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number
  ])
}

Box.defaultProps = {
  x: 0,
  y: 0,
  width: '400',
  height: '300',
  stroke: theme.color.gray,
  fill: theme.color.pink
}

export default Box