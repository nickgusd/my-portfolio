import { GetStaticProps } from 'next';

import Layout from '../components/layout';
import { JobsList } from '../components/jobs_list';
import { Sidebar } from '../components/sidebar';

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
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <h1>Experience</h1>
          </div>
          <JobsList data={data} />
        </div>
      </div>
    </Layout>
  );
}
