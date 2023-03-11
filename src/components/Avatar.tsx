import styles from './Avatar.module.css'

interface IAvatarProps {
  hasBorder?: boolean;
  src: string
  alt?: string
}

export function Avatar({ hasBorder = true, src, alt }: IAvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={hasBorder ? styles.avatar : styles.avatarNoBorder}
    />
  )
}