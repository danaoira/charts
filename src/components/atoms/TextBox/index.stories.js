import React from 'react'
import { storiesOf } from '@storybook/react'
import { theme, StorySvg } from '../../../utils'
import TextBox from './index'

const width = 800
const height = 600

storiesOf('TextBox', module)
  .add('default', () => (
    <StorySvg width={width} height={height}>
      <rect width={width} height={height} fill={theme.color.pink} />
      <TextBox
        x={width / 2}
        y={height / 2}
        width={width / 4}
        height={height / 7}
      >Hello World</TextBox>
    </StorySvg>
    )
  )