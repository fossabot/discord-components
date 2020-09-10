import React from 'react'
import { Button } from 'discord-components'
import 'discord-components/dist/index.css'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button'
}

const ButtonSpacer = () => (
  <style>
    {`
        button + button {
          margin-left: 10px;
        }
      `}
  </style>
)

export const Default = () => (
  <>
    <ButtonSpacer />
    <Button onClick={action('btn1_click')}>BUTTON</Button>
    <Button onClick={action('btn2_click')} color='red'>
      BUTTON
    </Button>
    <Button onClick={action('btn3_click')} color='green'>
      BUTTON
    </Button>
    <Button onClick={action('btn4_click')} color='yellow'>
      BUTTON
    </Button>
  </>
)

export const Outlined = () => (
  <>
    <ButtonSpacer />
    <Button variant='outlined' onClick={action('btn1_click')}>
      BUTTON
    </Button>
    <Button variant='outlined' onClick={action('btn2_click')} color='red'>
      BUTTON
    </Button>
    <Button variant='outlined' onClick={action('btn3_click')} color='green'>
      BUTTON
    </Button>
    <Button variant='outlined' onClick={action('btn4_click')} color='yellow'>
      BUTTON
    </Button>
  </>
)
