import Head from 'next/head';
import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './layout.module.css';
import { Navbar } from './navbar';
import { MobileNavbar } from './mobile_nav';
import Responsive from './responsive';

import { useMediaQuery } from 'react-responsive';

export const siteTitle = "Nick's Portfolio";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const isSmallMobile = useMediaQuery({ query: '(max-width: 325px)' });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isGithub = router.pathname === '/github';
  const containerStyle = isOpen ? styles.openContainer : styles.container;
  const mobileContainerStyle = isSmallMobile ? styles.mobileContainer : '';

  return (
    <Responsive>
      <div className={`${containerStyle} ${mobileContainerStyle}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Learn how to build a personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>
          <div className={isMobile ? styles.mobileWrapper : styles.wrapper}>
            {isMobile
              ? !isGithub && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
              : !isGithub && <Navbar />}
            {children}
          </div>
        </main>
      </div>
    </Responsive>
  );
}
