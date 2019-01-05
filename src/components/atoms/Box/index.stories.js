import React from 'react'
import { storiesOf } from '@storybook/react'
import { theme, StorySvg } from '../../../utils'
import Box from './index'

storiesOf('Box', module)
  .add('default', () => (
    <StorySvg>
      <Box />
    </StorySvg>
    )
  )

  .add('custom x, y', () => (
    <StorySvg>
      <Box
        x={300}
        y={300}
      />
    </StorySvg>
    )
  )

  .add('custom width, height', () => (
    <StorySvg>
      <Box
        width={300}
        height={300}
      />
    </StorySvg>
    )
  )

  .add('custom stroke, fill', () => (
    <StorySvg>
      <Box
        stroke={theme.color.pink}
        fill={theme.color.white}
      />
    </StorySvg>
    )
  )