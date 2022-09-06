import { Icon } from 'semantic-ui-react';
import { useState } from 'react';
import Image from 'next/image';

import githubIcon from '../public/assets/github-logo-filled.svg';
import githubActive from '../public/assets/github-logo-active.svg';

import styles from './card.module.css';

export const CardFooter = ({ github, deployed }) => {
  const [active, setActive] = useState(false);
  const onMoustEnter = () => setActive(true);
  const onMouseLeave = () => setActive(false);
  return (
    <div className={styles.cardFooter} onMouseEnter={onMoustEnter} onMouseLeave={onMouseLeave}>
      <a href={github} target="_blank">
        <Image src={active ? githubActive : githubIcon} width={20} height={20} />
      </a>
      <a href={deployed} target="_blank">
        <Icon link name="external alternate" size="large" />
      </a>
    </div>
  );
};
