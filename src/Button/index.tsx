import React, { ReactNode } from 'react'
import styles from './Button.module.css'
import { Color } from '../utils/color'

type ButtonProps = {
  children: ReactNode
  color?: Color
}
const Button = ({ children, color }: ButtonProps) => {
  if (!color) color = 'purple'
  return (
    <button className={`${styles.button} ${styles[color]}`}>{children}</button>
  )
}

export default Button
