import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

import { Contact } from '../components/contact';
import { Sidebar } from '../components/sidebar';
import Layout from '../components/layout';

import styles from '../components/contact.module.css';

export default function ContactMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  const router = useRouter();

  useEffect(() => {
    if (!isMobile) {
      router.push('/error');
    }
  }, []);

  return (
    <Layout>
      <div className={styles.mobileContainer}>
        <h1>Contact</h1>
        <Contact />
        <Sidebar />
      </div>
    </Layout>
  );
}
