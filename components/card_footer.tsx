import React from 'react';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

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
          className={styles.github}
          href={github}
          target="_blank"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          rel="noreferrer">
          <BsGithub color={active ? '#34E89E' : '#b7b6c2'} />
        </a>
        <a
          className={styles.external}
          href={deployed}
          target="_blank"
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          rel="noreferrer">
          <FiExternalLink color={active2 ? '#34E89E' : '#b7b6c2'} />
        </a>
      </div>
      {stack && <Tooltip icon="info circle" content={stack} />}
    </div>
  );
};
