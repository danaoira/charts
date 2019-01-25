import React from 'react'
import { range } from 'd3-array'
import { Box } from '../../atoms'

const RelationshipGroup = ({ rectWidth, rectHeight, chartGroup }) => (
  <g transform={`translate(0, ${rectHeight * 2})`}>
    {range(0,2).map((d, i) => (
      <g>
        <Box
        x={5}
        y={rectHeight * i + 5}
          width={rectWidth - 10}
          height={rectHeight - 10}
          key={`comparison-${i}`}
        />
        <text
          fontSize={12}
          x={rectWidth / 2 - 2.5}
          y={i * rectHeight + (rectHeight / 2)}
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

export default RelationshipGroup