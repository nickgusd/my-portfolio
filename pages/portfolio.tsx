import Layout from '../components/layout';
import { Sidebar } from '../components/sidebar';
import { Card } from '../components/card';
import { Grid } from '../components/grid';
import styles from '../components/grid.module.css';

export default function Portfolio() {
  return (
    <Layout>
      <div className={styles.flexWrapper}>
        <Sidebar />
        <Grid />
      </div>
    </Layout>
  );
}
