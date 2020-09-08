import React from 'react'
import styles from './Input.module.scss'

type InputProps = {
  variant?: 'input' | 'textarea'
  dark?: boolean
}

const Input: React.FC<
  InputProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ variant, dark, ...others }) => {
  let Comp
  switch (variant) {
    case 'input':
    case undefined:
      Comp = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
        <input {...props} />
      )
      break
    case 'textarea':
      Comp = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
        <textarea {...props} />
      )
      break
  }
  // @ts-ignore
  return (
    <Comp
      className={`${styles.input} ${dark ? styles.dark : ''}`}
      {...others}
    />
  )
}

export default Input
