import React from 'react'
import { range } from 'd3-array'
import { Box } from '../../atoms'

const CompositionGroup = ({ rectWidth, rectHeight, chartGroup }) => (
  <g transform={`translate(0, ${rectHeight * 6})`}>
    {range(0,7).map((d, i) => (
      <Box
        x={rectWidth * i + 5}
        y={5}
        width={rectWidth - 10}
        height={rectHeight - 10}
        key={`composition-${i}`}
      >
        <text fill={'#fff'}>{chartGroup[i].name}</text>
      </Box>
    ))}
  </g>
)

export default CompositionGroup