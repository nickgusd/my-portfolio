import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import LogoIcon from '../public/assets/Logo-icon.png';
import portfolioIcon from '../public/portfolio_logo.svg';

import styles from './navbar.module.css';

export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const navItems = ['About', 'Portfolio', 'Experience', 'Resume'];
  const toLower = navItems.map(
    (item) => item.slice(0, 1).toLowerCase() + item.slice(1, item.length)
  );

  useEffect(() => {
    if (router.pathname === '/') {
      setActive('/about');
    } else {
      setActive(router.pathname);
    }
  }, []);

  const activeLink = (item) => {
    if ('/' + item === active) {
      return 'linkActive';
    }
    return 'link';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper} onClick={() => router.push('/')}>
        <Image src={portfolioIcon} width={50} height={50} alt="logo" loading="eager" unoptimized />
      </div>
      <div className={styles.linkWrapper}>
        {navItems.map((item, idx) => {
          return (
            <Link key={item} href={'/' + toLower[idx]} passHref>
              <a className={styles[activeLink(toLower[idx])]}>{item}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
