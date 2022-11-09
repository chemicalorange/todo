import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCompleted, reorderTodos } from 'store/todoSlice'
import type { RootState } from 'store'

import { Container } from 'components/ui/container'
import { ListItem } from 'components/ui/list-item'

import { Reorder } from 'framer-motion'

import cn from 'classnames'

import styles from './styles.module.scss'

export const List = () => {
  const [filter, setFilter] = useState('all')
  const allTodos = useSelector((state: RootState) => Object.values(state.todos.entities))
  const filteredTodos = useSelector((state: RootState) => {
    const todos = Object.values(state.todos.entities) 
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter(item => item.checked === false)
      case 'completed':
        return todos.filter(item => item.checked)
    }
  }
  )
  const [todos, setTodos] = useState(filteredTodos)

  useEffect(() => {
    setTodos(filteredTodos)
  }, [filter])
 
  const unfinishedTodos = todos.filter((item) => item.checked === false)
  const dispatch = useDispatch()
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Reorder.Group values={allTodos} onReorder={(items) => dispatch(reorderTodos(items))} className={styles.items}>
          {filteredTodos.map((item) => (
            <ListItem key={item.id} item={item}/>
          ))}
          {
            allTodos.length > 0 && (
              <div>
              <div className={styles.info}>
                <span>{unfinishedTodos.length} uncompleted</span>
                <span onClick={() => dispatch(removeCompleted())}>
                  Clear Completed
                </span>
              </div>
            </div>
            )
          }
        </Reorder.Group>
        {
          allTodos.length > 0 && (
            <div className={styles.filter}>
              <span
                className={cn({ [styles.active]: filter === 'all' })}
                onClick={() => setFilter('all')}
              >
                All
              </span>
              <span
                className={cn({ [styles.active]: filter === 'active' })}
                onClick={() => setFilter('active')}
              >
                Active
              </span>
              <span
                className={cn({ [styles.active]: filter === 'completed' })}
                onClick={() => setFilter('completed')}
              >
                Completed
              </span>
            </div>
          )
        }
        {
          allTodos.length <= 0 && (
            <div className={styles.noTasks}>
              No tasks
            </div>
          )
        }
        <div className={styles.desc}>Drag and drop to reorder list</div>
      </Container>
    </div>
  )
}
