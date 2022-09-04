import Image from 'next/image';

import Layout from '../components/layout';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Sidebar } from '../components/sidebar';
import LogoIcon from '../public/assets/Logo-icon.png';

import styles from '../components/about.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <About />
        <Contact />
      </div>
    </Layout>
  );
}
