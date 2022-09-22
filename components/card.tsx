import React, { ReactNode } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import styles from './card.module.css';

type LayoutProp = 'fixed' | 'fill' | 'intrinsic' | 'responsive';

interface Props {
  children?: ReactNode;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  src?: StaticImageData;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  layout?: LayoutProp;
  link?: boolean;
  href?: string;
  onClick: () => void;
  experience: boolean;
  contact: boolean;
}

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
  experience,
  contact
}: Props) =>
  link ? (
    <a
      onClick={onClick}
      target="_blank"
      className={styles.container}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {header && <header>{header}</header>}
      {src && (
        <Image
          className={styles.image}
          src={src}
          layout={layout}
          width={225}
          height={contact ? 225 : 175}
          loading="eager"
          unoptimized
        />
      )}
      {content && (
        <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </a>
  ) : (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {header && <header>{header}</header>}
      {src && (
        <Image
          className={styles.image}
          src={src}
          layout={layout}
          width={225}
          height={contact ? 225 : 175}
          loading="eager"
          unoptimized
        />
      )}
      {content && (
        <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
