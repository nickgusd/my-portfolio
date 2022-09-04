import React, { useState } from 'react';
import Image from 'next/image';

import styles from './sidebar.module.css';

import linkedin from '../public/assets/linkedin-filled.svg';
import github from '../public/assets/github-logo-filled.svg';
import facebook from '../public/assets/facebook-filled.svg';
import instagram from '../public/assets/instagram-filled.svg';
import linkedinActive from '../public/assets/linkedin-active.svg';
import githubActive from '../public/assets/github-logo-active.svg';
import instagramActive from '../public/assets/instagram-active.svg';
import facebookActive from '../public/assets/facebook-active.svg';

export const Sidebar = () => {
  const [current, setCurrent] = useState(null);
  const sideBarItems = [
    { filled: linkedin, active: linkedinActive },
    { filled: github, active: githubActive },
    { filled: facebook, active: facebookActive },
    { filled: instagram, active: instagramActive }
  ];

  const onMouseOver = (item) => setCurrent(item.active);

  return (
    <div className={styles.wrapper}>
      {sideBarItems.map((item, idx) => (
        <a
          key={idx}
          className={styles.sidebarItem}
          onMouseEnter={() => onMouseOver(item)}
          onMouseLeave={() => setCurrent(null)}>
          <Image src={current === item.active ? item.active : item.filled} width={30} height={30} />
        </a>
      ))}
    </div>
  );
};
