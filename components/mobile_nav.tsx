import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import menuIcon from '../public/menu-icon.svg';
import closeIcon from '../public/close-icon.svg';
import portfolioIcon from '../public/portfolio_logo.svg';

import styles from './mobile_nav.module.css';

export const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [active, setActive] = useState('');
  const navItems = ['About', 'Portfolio', 'Experience', 'Contact', 'Resume'];
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper} onClick={() => router.push('/')}>
        <Image src={portfolioIcon} width={50} height={50} alt="logo" loading="eager" unoptimized />
      </div>
      <div className={styles.iconWrapper} onClick={handleClick}>
        <Image src={menuIcon} width={30} height={30} alt="logo" loading="eager" unoptimized />
      </div>
      {isOpen && (
        <>
          <div className={styles.menuOpenIcon} onClick={handleClick}>
            <Image src={closeIcon} width={25} height={25} alt="logo" loading="eager" unoptimized />
          </div>
          <div className={styles.linkContainer}>
            {navItems.map((item, idx) => {
              return (
                <div className={styles.linkWrapper}>
                  <Link key={item} href={'/' + toLower[idx]} passHref>
                    <a className={styles[activeLink(toLower[idx])]}>{item}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
