import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'
function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          <Post author='Victor' content='Esse é o meu primeiro post' />
          <Post author='Leitão' content='Lorem ipsum blablabla' />

        </main>

      </div>
    </div>
  )
}

export default App
