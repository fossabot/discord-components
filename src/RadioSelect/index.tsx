import React from 'react'
import styles from './RadioSelect.module.scss'
import { Color } from '..'

type SelectItem = {
  title: string
  description?: string
  value: string
  color?: Color
  default?: boolean
}

function makeid(length: number) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const RadioButton = ({ items }: { items: Array<SelectItem> }) => {
  const [name] = React.useState(makeid(128))

  return (
    <div className={styles.group}>
      {items.map((item, i) => (
        <label key={i} className={styles.label}>
          <input
            className={styles.check}
            type='radio'
            name={name}
            value={item.value}
            defaultChecked={item.default}
          />
          <span
            className={`${styles.background} ${styles[item.color || 'purple']}`}
          >
            <div className={styles.checkboxDisplayContainer}>
              <svg
                className={styles.svg}
                aria-hidden='true'
                width='18'
                height='18'
                viewBox='0 0 24 24'
              >
                <path
                  className={styles.path}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z'
                />
              </svg>
            </div>

            <p className={styles.titleContainer}>
              {item.title}
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </p>
          </span>
        </label>
      ))}
    </div>
  )
}

export default RadioButton
