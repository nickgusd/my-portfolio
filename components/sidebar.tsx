import React, { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });

  const sideBarItems = [
    {
      filled: linkedin,
      active: linkedinActive,
      href: 'https://www.linkedin.com/in/nick-guimarais-5b1b6249/'
    },
    { filled: github, active: githubActive, href: 'https://github.com/nickgusd' },
    { filled: facebook, active: facebookActive, href: 'https://www.facebook.com/nick.guimarais/' },
    {
      filled: instagram,
      active: instagramActive,
      href: 'https://www.instagram.com/nick_dacosta21/'
    }
  ];

  const onMouseOver = (item) => setCurrent(item.active);

  if (isMobile) return null;

  return (
    <div className={styles.wrapper}>
      {sideBarItems.map((item, idx) => (
        <a
          href={item.href}
          key={idx}
          target="_blank"
          className={styles.sidebarItem}
          onMouseEnter={() => onMouseOver(item)}
          onMouseLeave={() => setCurrent(null)}>
          <Image src={current === item.active ? item.active : item.filled} width={30} height={30} />
        </a>
      ))}
    </div>
  );
};
