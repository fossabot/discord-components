import React from 'react'
import { Input } from 'discord-components'
import { action } from '@storybook/addon-actions'

export default {
  title: '텍스트 필드',
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

// @ts-ignore
const DarkTheme = ({ children }) => <div className='dark-theme'>{children}</div>

export const Dark = () => (
  <DarkTheme>
    <Input dark onChange={action('change')} />
  </DarkTheme>
)

export const DarkWithPlaceholder = () => (
  <DarkTheme>
    <Input placeholder='이름을 입력하세요' dark onChange={action('change')} />
  </DarkTheme>
)

Dark.parameters = {
  backgrounds: { default: 'dark' }
}

DarkWithPlaceholder.parameters = {
  backgrounds: { default: 'dark' }
}
