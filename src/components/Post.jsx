import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article class={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ViktorHugodev.png"/>
          <div className={styles.authorInfo}>
            <strong>Victor Hugo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='09 de Março ás 14:14' dateTime='2022-03-09 14:14'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
