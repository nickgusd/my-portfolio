import { Card } from './card';

import styles from './grid.module.css';

export const Grid = () => {
  const projects = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6'];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.row}>
        {projects.slice(0, 3).map((item) => (
          <Card header={item} />
        ))}
      </div>
      <div className={styles.row}>
        {projects.slice(3, 6).map((item) => (
          <Card header={item} />
        ))}
      </div>
    </div>
  );
};
