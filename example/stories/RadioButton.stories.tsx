import React from 'react'
import { RadioSelect } from 'discord-components'

export default {
  title: 'Select Buttons'
}

export const Default = () => (
  <div>
    <RadioSelect
      items={[
        {
          title: '나를 안전하게 보호하기',
          description: '모든 사용자의 개인 메시지를 스캔하기.',
          value: 'sel1',
          color: 'green',
          default: true
        },
        {
          title: '착한 친구만 있어요',
          description: '친구가 아닌 모든 사람의 메시지를 스캔하기.',
          value: 'sel1',
          color: 'yellow'
        },
        {
          title: '스캔하지 않기',
          description: '개인 메시지에서는 유해 콘텐츠를 스캔하지 않아요.',
          value: 'sel1',
          color: 'red'
        }
      ]}
    />
  </div>
)
