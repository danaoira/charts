import React from 'react'
import { range } from 'd3-array'
import { Box } from '../../atoms'

const DistributionGroup = ({ rectWidth, rectHeight, chartGroup }) => (
  <g transform={`translate(${rectWidth * 7}, ${rectHeight * 2})`}>
    {range(0,4).map((d, i) => (
      <Box
        x={5}
        y={rectHeight * i + 5}
        width={rectWidth - 10}
        height={rectHeight - 10}
        key={`distribution-${i}`}
      >
        <text fill={'#fff'}>{chartGroup[i].name}</text>
      </Box>
    ))}
  </g>
)

export default DistributionGroup