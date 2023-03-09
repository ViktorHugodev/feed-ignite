import styles from './Sidebar.module.css'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src='https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2JTIwY29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' />
      
      <div className={styles.profile}>
        <strong>Victor Hugo</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}