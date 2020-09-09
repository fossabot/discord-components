import React from 'react'
import 'discord-components/dist/index.css'
import { Switch } from 'discord-components'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Switch'
}

export const Default = () => <Switch onChange={action('change')} />
