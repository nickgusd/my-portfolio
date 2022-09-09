import type { NextPage } from 'next';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Layout from '../components/layout';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Sidebar } from '../components/sidebar';

import styles from '../components/about.module.css';

const Home: NextPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 820px)' });
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <About />
        {!isMobile && <Contact />}
      </div>
    </Layout>
  );
};

export default Home;
