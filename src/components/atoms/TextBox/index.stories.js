import React from 'react'
import { storiesOf } from '@storybook/react'
import { theme, StorySvg } from '../../../utils'
import TextBox from './index'

storiesOf('TextBox', module)
  .add('default', () => (
    <StorySvg>
      <TextBox>Hello World</TextBox>
    </StorySvg>
    )
  )