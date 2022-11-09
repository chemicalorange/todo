import styles from './styles.module.scss'

export const Input = ({...otherProps}) => {
  return (
    <input className={styles.input} type="text" {...otherProps} />
  )
}