import React from 'react';

import styles from './mobile_jobs_list.module.css';

import { Card } from './card';

export const MobileJobsList = ({ data }) => {
  return (
    <div className={styles.mobileContainer}>
      {data.map((item) => (
        <div className={styles.wrapper}>
          <Card
            onClick={null}
            experience
            header={item.company}
            content={
              <>
                <div className={styles.header}>{item.position}</div>
                <div className={styles.date}>{item.date}</div>
                <br />
                <div>{item.description}</div>
                <br />
                {item.techStack && (
                  <div className={styles.techDetails}>
                    <span>Tech Stack:</span> {item.techStack}
                  </div>
                )}
                {item.tools && (
                  <div className={styles.techDetails}>
                    <span>Tools: </span>
                    {item.tools}
                  </div>
                )}
                {item.testing && (
                  <div className={styles.techDetails}>
                    <span>Testing: </span>
                    {item.testing}
                  </div>
                )}
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};
