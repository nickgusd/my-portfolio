import React, { useState } from 'react';

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
        <h3>{current.position}</h3>
        <p>Date: {current.date}</p>
        <div className={styles.description}>{current.description}</div>
        <br />
        <div className={styles.tech}>
          {current.techStack && (
            <div>
              <span>Tech Stack:</span> {current.techStack}
            </div>
          )}
          {current.tools && (
            <div>
              <span>Tools: </span>
              {current.tools}
            </div>
          )}
          {current.testing && (
            <div>
              <span>Testing: </span>
              {current.testing}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
