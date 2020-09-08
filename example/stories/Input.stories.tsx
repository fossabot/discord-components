import React from 'react'
import 'discord-components/dist/index.css'
import { Input } from 'discord-components'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Input',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff'
      },
      {
        name: 'dark',
        value: '#36393f'
      }
    ]
  }
}

export const Default = () => <Input onChange={action('change')} />

export const WithPlaceholder = () => (
  <Input onChange={action('change')} placeholder='이름을 입력하세요' />
)

export const Textarea = () => (
  <Input
    onChange={action('change')}
    variant='textarea'
    placeholder='내용을 입력하세요'
    style={{
      height: 100
    }}
  />
)

export const Dark = () => <Input dark onChange={action('change')} />

export const DarkWithPlaceholder = () => (
  <Input placeholder='이름을 입력하세요' dark onChange={action('change')} />
)

Dark.parameters = {
  backgrounds: { default: 'dark' }
}
