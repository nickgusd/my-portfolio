import React from 'react';
import Image from 'next/image';
import LinkedinSoft from '../public/assets/LinkedinSoft.png';

import styles from './card.module.css';

export const Card = ({ header, content, footer, src, onMouseEnter, onMouseLeave }) => (
  <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {header && <header>{header}</header>}
    <Image className={styles.image} src={src} width="225" height="225" layout="fixed" />
    {content && <div>{content}</div>}
    {footer && <div>{footer}</div>}
  </div>
);
