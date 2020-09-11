import React from 'react'
import styles from './MessageEmbed.module.scss'

type EmbedField = {
  name: string
  value: string
  inline?: boolean
}

type MessageEmbed = {
  title?: string
  description?: string
  footer?: {
    text?: string
    icon?: string
  }
  fields?: Array<EmbedField>
  author?: {
    text?: string
    icon?: string
  }
}

const MessageEmbedComponent = ({ embed }: { embed: MessageEmbed }) => {
  return (
    <div className={styles.embedContainer}>
      {embed.author && (
        <div className={styles.embedAuthor}>
          {embed.author.icon && (
            <img
              alt=''
              src={embed.author.icon}
              className={styles.embedAuthorIcon}
            />
          )}
          {embed.author.text && (
            <div className={styles.embedFooterText}>{embed.author.text}</div>
          )}
        </div>
      )}
      {embed.title && <div className={styles.embedTitle}>{embed.title}</div>}
      {embed.description && (
        <div className={styles.embedDescription}>{embed.description}</div>
      )}
      {embed.fields && (
        <div className={styles.embedFields}>
          {embed.fields.map((field, i) => (
            <div className={styles.embedField} key={i}>
              <div className={styles.embedFieldName}>{field.name}</div>
              <div className={styles.embedFieldValue}>{field.value}</div>
            </div>
          ))}
        </div>
      )}
      {embed.footer && (
        <div className={styles.embedFooter}>
          {embed.footer.icon && (
            <img
              alt=''
              src={embed.footer.icon}
              className={styles.embedFooterIcon}
            />
          )}
          {embed.footer.text && (
            <div className={styles.embedFooterText}>{embed.footer.text}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default MessageEmbedComponent
