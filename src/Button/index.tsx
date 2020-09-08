import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import { Color } from '..'

type ButtonProps = {
  children?: ReactNode
  color?: Color
  variant?: 'default' | 'outlined'
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ color, variant, ...other }: ButtonProps) => {
  if (!color) color = 'purple'
  if (!variant) variant = 'default'
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[variant]}`}
      {...other}
    />
  )
}

export default Button
