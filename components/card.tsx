import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
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
}: Props) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const experienceMobile = router.pathname === '/experience' && isMobile ? styles.experience : '';
  return (
    <>
      {link ? (
        <a
          onClick={onClick}
          target="_blank"
          className={`${styles.container} ${styles.link}`}
          href={href}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          rel="noreferrer">
          {header && <header>{header}</header>}
          {src && (
            <Image
              className={styles.image}
              src={src}
              layout={layout}
              width={225}
              height={contact ? 225 : 175}
              priority
            />
          )}
          {content && (
            <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
          )}
          {footer && <div className={styles.footer}>{footer}</div>}
        </a>
      ) : (
        <div
          className={`${styles.container} ${experienceMobile}`}
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
              priority
            />
          )}
          {content && (
            <div className={experience ? styles.contentExperience : styles.content}>{content}</div>
          )}
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      )}
    </>
  );
};
