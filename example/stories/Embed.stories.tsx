import { MessageEmbed } from 'discord-components'
import React from 'react'

export default {
  title: '임베드'
}

export const Example = () => (
  <MessageEmbed
    embed={{
      title: '타이틀',
      description: '와샌즈',
      footer: {
        text: 'ditto7890#1234',
        icon:
          'https://cdn.discordapp.com/avatars/604617640891121664/1f86839f891456d76a79e50e5c901d6e.png'
      },
      fields: [
        {
          name: '필드',
          value: '내용',
          inline: true
        },
        {
          name: '필드',
          value: '내용',
          inline: true
        },
        {
          name: '필드',
          value: '내용'
        }
      ]
    }}
  />
)
