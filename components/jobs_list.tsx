import { useState } from 'react';
import { Item } from 'semantic-ui-react';

import styles from './jobs_list.module.css';

export const JobsList = ({ data }) => {
  const [current, setCurrent] = useState(data[0]);
  const handleClick = (job) => setCurrent(job);

  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>
        {data.map((job) => (
          <div
            className={current.company === job.company ? styles.currentTab : styles.tab}
            onClick={() => handleClick(job)}>
            {job.company}
          </div>
        ))}
      </div>
      <div className={styles.secondItem}>
        <h2>{current.company}</h2>
        <div>{current.description}</div>
      </div>
    </div>
  );
};
