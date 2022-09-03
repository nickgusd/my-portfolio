import type { NextPage } from 'next';
import React from 'react';

import Layout from "../components/layout";
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Sidebar } from '../components/sidebar';

import styles from "../components/about.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <About />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
