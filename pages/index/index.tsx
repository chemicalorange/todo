import Head from 'next/head'
import { Header } from 'components/ui/header'
import { List } from 'components/common/list'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import cn from 'classnames'

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.mood)
  return (
    <div className={cn(styles.wrapper, theme)}>
      <Head>
        <title>Todolist</title>
        <meta name="description" content="A little todolist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <List />
      </main>
    </div>
  )
}
