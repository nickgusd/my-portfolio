import { GetStaticProps } from 'next';

import Layout from '../components/layout';
import { Sidebar } from '../components/sidebar';
import { Grid } from '../components/grid';
import styles from '../components/grid.module.css';
import { getData } from '../helpers/helpers';
import { projects } from '../content/projects';

export const getStaticProps: GetStaticProps = async (context) => {
  const data = getData(projects);
  return {
    props: {
      data
    }
  };
};

export default function Portfolio({ data }) {
  return (
    <Layout>
      <div className={styles.flexWrapper}>
        <Sidebar />
        <Grid data={data} />
      </div>
    </Layout>
  );
}
