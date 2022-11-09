import { useState } from 'react'
import { Container } from '../container'
import { Input } from '../input'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from 'store/todoSlice'
import { toggleTheme } from 'store/themeSlice'
import cn from 'classnames'
import styles from './styles.module.scss'
import { RootState } from 'store'
import Image from 'next/image'
import IconSun from './images/icon-sun.svg'
import IconMoon from './images/icon-moon.svg'

export const Header = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.mood)

  const addTask = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <header className={cn(styles.wrapper, styles[theme])}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <span className={styles.logo}>TODO</span>
          <button onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? (<Image src={IconMoon} alt="changeModeToDark" width={20} height={20} />) : 
            (<Image src={IconSun} alt="changeModeToLight" width={20} height={20} />)}
          </button>
        </div>
        <div className={styles.input}>
          <Input 
            placeholder="Create a new todo"
            value={value}
            onChange={(e:Event) => setValue(e.target.value)} 
          />
          <div 
            className={cn(styles.add, { [styles.active]: value !== '' })}
            onClick={addTask}
          />
        </div>
      </Container>
    </header>
  )
}