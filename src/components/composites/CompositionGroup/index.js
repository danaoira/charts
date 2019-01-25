import React from 'react'
import { range } from 'd3-array'
import { Box } from '../../atoms'

const CompositionGroup = ({ rectWidth, rectHeight, chartGroup }) => (
  <g transform={`translate(0, ${rectHeight * 6})`}>
    {range(0,7).map((d, i) => (
      <g>
        <Box
          x={rectWidth * i + 5}
          y={5}
          width={rectWidth - 10}
          height={rectHeight - 10}
          key={`comparison-${i}`}
        />
        <text
          fontSize={12}
          x={i * rectWidth + (rectWidth / 2)}
          y={rectHeight / 2 - 2.5}
          fill={'#fff'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
        >
          {chartGroup[i].name.slice(0,20)}
        </text>
      </g>
    ))}
  </g>
)

export default CompositionGroup