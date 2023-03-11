import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IPostProps {
  data: IDataPost
}

interface IDataPost {
  author:{
    avatarUrl: string
    role: string
    name: string
  }
  content:{
    type: string
    content: string
  }[]
  publishedAt: Date
}

export function Post({data}: IPostProps) {

  const [comments, setComments] = useState([
    'Esse post é muito legal'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(data.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(data.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleSubmitComment(event: FormEvent){
    event.preventDefault()
    setComments([...comments,newCommentText ])
    setNewCommentText('')
  }

  function handleChangeCommentText(event: ChangeEvent<HTMLTextAreaElement>): void{
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }
  function onInvalidCommentText(event: ChangeEvent<HTMLTextAreaElement>): void{
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
 
  }
  const isNewCommentEmpty = newCommentText.length === 0
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={data.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={data.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
       {data.content.map((line) => {
        if (line.type === 'paragraph'){
          return <p key={line.content}>{line.content}</p>
        } else if (line.type ==='link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
       })}
      </div>

      <form 
      onSubmit={handleSubmitComment}
      className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          onChange={handleChangeCommentText}
          value={newCommentText}
          name="comment"
          placeholder='Deixe um comentário' 
          onInvalid={onInvalidCommentText}
          required
        />
        <footer>
          <button type='submit'
          disabled={isNewCommentEmpty}
          >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return <Comment 
          onDeleteComment={deleteComment}
          content={comment} 
          key={index}
          />
        })}
      </div>
    </article>
  )
}
