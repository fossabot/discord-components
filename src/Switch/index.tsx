import React from 'react'
import styles from './Switch.module.scss'

const Switch = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <label className={styles.switch}>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className={styles.slider} />
    </label>
  )
}

export default Switch
