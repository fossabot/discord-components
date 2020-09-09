import React from 'react'
import styles from './Switch.module.scss'

const Switch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <label className={styles.label}>
      <input type='checkbox' {...props} className={styles.input} />
      <span className={styles.slider} />
    </label>
  )
}

export default Switch
