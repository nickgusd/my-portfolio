import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import styles from './sidebar.module.css';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export const Sidebar = () => {
  const [current, setCurrent] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const router = useRouter();
  const isContact = router.pathname === '/contact';

  const sideBarItems = [
    {
      filled: <BsLinkedin color="#b7b6c2" />,
      active: <BsLinkedin color="#34E89E" />,
      href: 'https://www.linkedin.com/in/nick-guimarais-5b1b6249/',
      name: 'linkedIn'
    },
    {
      filled: <BsGithub color="#b7b6c2" />,
      active: <BsGithub color="#34E89E" />,
      href: 'https://my-portfolio-nickgusd.vercel.app/github',
      name: 'github'
    },
    {
      filled: <BsFacebook color="#b7b6c2" />,
      active: <BsFacebook color="#34E89E" />,
      href: 'https://www.facebook.com/nick.guimarais/',
      name: 'facebook'
    },
    {
      filled: <BsInstagram color="#b7b6c2" />,
      active: <BsInstagram color="#34E89E" />,
      href: 'https://www.instagram.com/nick_dacosta21/',
      name: 'instagram'
    }
  ];

  const onMouseOver = (item) => setCurrent(item.name);

  if (isMobile && !isContact) return null;

  return (
    <div className={isMobile ? styles.mobileWrapper : styles.wrapper}>
      {sideBarItems.map((item, idx) => (
        <a
          href={item.href}
          key={idx}
          target="_blank"
          className={styles.sidebarItem}
          onMouseEnter={() => onMouseOver(item)}
          onMouseLeave={() => setCurrent(null)}
          rel="noreferrer">
          {current === item.name ? item.active : item.filled}
        </a>
      ))}
    </div>
  );
};
