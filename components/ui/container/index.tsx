import { ReactNode } from "react"

import styles from './styles.module.scss'
import cn from 'classnames'

type ComponentProps = {
  children: ReactNode
  className?: string
}

export const Container = (props: ComponentProps) => {
  const { children, className } = props

  return (
    <div className={cn(styles.container, className)}>
      {children}
    </div>
  )
} 