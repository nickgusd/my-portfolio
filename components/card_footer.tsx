import React from 'react';

import { useState } from 'react';
import Image from 'next/image';

import githubIcon from '../public/github-logo-filled.svg';
import githubActive from '../public/github-logo-active.svg';
import externalLink from '../public/external-link.svg';
import externalLinkActive from '../public/external-link-active.svg';
import Tooltip from './tooltip';

import styles from './card.module.css';

export const CardFooter = ({ github, deployed, stack }) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const onMouseEnter = () => {
    setActive(true);
  };
  const onMouseLeave = () => {
    setActive(false);
  };
  const onMouseEnter2 = () => {
    setActive2(true);
  };
  const onMouseLeave2 = () => {
    setActive2(false);
  };
  return (
    <div className={styles.cardFooter}>
      <div className={styles.leftWrapper}>
        <a
          href={github}
          target="_blank"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          rel="noreferrer">
          <Image src={active ? githubActive : githubIcon} width={20} height={20} />
        </a>
        <a
          href={deployed}
          target="_blank"
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          rel="noreferrer">
          <Image src={active2 ? externalLinkActive : externalLink} width={20} height={20} />
        </a>
      </div>
      {stack && <Tooltip icon="info circle" content={stack} />}
    </div>
  );
};
