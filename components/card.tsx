import React from 'react';
import Image from 'next/image';

import styles from './card.module.css';

export const Card = ({
  header,
  content,
  footer,
  src,
  onMouseEnter,
  onMouseLeave,
  layout = 'fixed',
  link = false,
  href,
  onClick,
  experience
}) =>
  link ? (
    <a
      onClick={onClick}
      target="_blank"
      className={styles.container}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {header && <header>{header}</header>}
      <Image className={styles.image} src={src} layout={layout} />
      {content && (
        <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </a>
  ) : (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {header && <header>{header}</header>}
      <Image className={styles.image} src={src} layout={layout} />
      {content && (
        <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
