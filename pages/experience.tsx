import React from 'react';
import { GetStaticProps } from 'next';
import { useMediaQuery } from 'react-responsive';

import Layout from '../components/layout';
import { JobsList } from '../components/jobs_list';
import { Sidebar } from '../components/sidebar';
import { MobileJobsList } from '../components/mobile_jobs_list';

import { getData } from '../helpers/helpers';
import { experience } from '../content/experience';

import styles from '../components/jobs_list.module.css';

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getData(experience);
  return {
    props: {
      data
    }
  };
};

export default function Experience({ data }) {
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <h1>Experience</h1>
          </div>
          {isMobile ? <MobileJobsList data={data} /> : <JobsList data={data} />}
        </div>
      </div>
    </Layout>
  );
}
