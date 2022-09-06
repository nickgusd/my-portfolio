import Layout from '../components/layout';
import { JobsList } from '../components/jobs_list';
import { Sidebar } from '../components/sidebar';

import styles from '../components/jobs_list.module.css';

export default function Experience() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <h1>Experience</h1>
          </div>
          <JobsList />
        </div>
      </div>
    </Layout>
  );
}
