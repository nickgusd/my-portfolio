import styles from './mobile_jobs_list.module.css';

import { Card } from './card';

export const MobileJobsList = ({ data }) => {
  return (
    <div className={styles.mobileContainer}>
      {data.map((item) => (
        <div className={styles.wrapper}>
          <Card
            header={item.company}
            content={
              <>
                <div className={styles.header}>{item.position}</div>
                <div>{item.description}</div>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};
