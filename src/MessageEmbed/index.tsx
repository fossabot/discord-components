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
}

const MessageEmbedComponent = ({ embed }: { embed: MessageEmbed }) => {
  return (
    <div className={styles.embedContainer}>
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

/*
        <div className={styles.embedDescription}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        consequuntur cum dolores ea facere inventore quaerat repudiandae
        similique voluptate voluptatibus! Earum hic in odio perspiciatis placeat
        rem suscipit tempora voluptatibus?
      </div>
      <div className={styles.embedFields}>
        <div
          className={`${styles.embedField} ${styles.inline}`}
          style={{
            gridColumn: '1/4'
          }}
        >
          <div className={styles.embedFieldName}>필드1</div>
          <div className={styles.embedFieldValue}>ditto7890:1234</div>
        </div>
        <div
          className={`${styles.embedField} ${styles.inline}`}
          style={{
            gridColumn: '5/8'
          }}
        >
          <div className={styles.embedFieldName}>필드2</div>
          <div className={styles.embedFieldValue}>버나나#0001</div>
        </div>
        <div
          className={`${styles.embedField} ${styles.inline}`}
          style={{
            gridColumn: '9/12'
          }}
        >
          <div className={styles.embedFieldName}>필드3</div>
          <div className={styles.embedFieldValue}>morrcPRO#0001</div>
        </div>
        <div
          className={`${styles.embedField} ${styles.inline}`}
          style={{
            gridColumn: '1/4'
          }}
        >
          <div className={styles.embedFieldName}>필드4</div>
          <div className={styles.embedFieldValue}>파랑이#0001</div>
        </div>
      </div>
      <div className={styles.embedFooter}>
        <img
          src='https://cdn.discordapp.com/avatars/628595345798201355/a_55f7291a2bfe4720695103f9078e34da.gif?size=128'
          alt=''
          className={styles.embedFooterIcon}
        />
        <div className={styles.embedFooterText}>와샌즈</div>
      </div>
         */
