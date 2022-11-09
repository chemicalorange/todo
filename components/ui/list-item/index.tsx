import IconRemove from './images/icon-cross.svg'
import IconCheck from './images/icon-check.svg'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleCheck } from 'store/todoSlice'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Reorder } from 'framer-motion'

type ListItemTypes = {
  item: {
    title: string
    id: string
    checked: boolean
  }
}

export const ListItem:React.FC<ListItemTypes> = ({item}) => {
  const { title, id, checked } = item
  const dispatch = useDispatch()
  return (
    <Reorder.Item value={item}
    whileDrag={{scale: 1.1}}
    className={cn(styles.item, {[styles.checked]: checked})}>
      <div 
          className={styles.marker}
          onClick={() => { 
            dispatch(toggleCheck(id))
          }}>
        <Image 
            src={IconCheck} width="10" height="10" alt="remove"
        />
      </div>
      <span className={styles.text}>{title}</span>
      <Image
          className={styles.close}
          src={IconRemove} width="15" height="15" alt="remove"
          onClick={() => {
            dispatch(removeTodo(id))
          }}
          />
    </Reorder.Item>
  )
}