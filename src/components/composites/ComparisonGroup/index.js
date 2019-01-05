import React from 'react'
import { range } from 'd3-array'
import { Box } from '../../atoms'

const ComparisonGroup = ({ rectHeight, rectWidth, chartGroup }) => (
  <g transform={`translate(0, 0)`}>
    {range(0,8).map((d, i) => (
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
        >{chartGroup[i].name.slice(0,20)}</text>
      </g>
    ))
    }
  </g>
)

export default ComparisonGroup