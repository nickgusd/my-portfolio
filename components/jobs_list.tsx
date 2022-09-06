import { useState } from 'react';

import styles from './jobs_list.module.css';

export const JobsList = () => {
  const positions = ['Demyst', 'Lifeshack', 'MGO LLP', 'RSM US LLP'];
  const [current, setCurrent] = useState(positions[0]);
  const handleClick = (job) => setCurrent(job);

  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>
        {positions.map((position) => (
          <div
            className={current === position ? styles.currentTab : styles.tab}
            onClick={() => handleClick(position)}>
            {position}
          </div>
        ))}
      </div>
      <div className={styles.secondItem}>
        <h2>{current}</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat ad dicta,
          natus beatae sunt assumenda modi, quae iste enim unde, aliquid velit fuga voluptatum
          temporibus atque. Assumenda, consectetur maxime. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae repellat ad dicta, natus beatae sunt assumenda modi, quae
          iste enim unde, aliquid velit fuga voluptatum temporibus atque. Assumenda, consectetur
          maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat ad
          dicta, natus beatae sunt assumenda modi, quae iste enim unde, aliquid velit fuga
          voluptatum temporibus atque. Assumenda, consectetur maxime. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae repellat ad dicta, natus beatae sunt assumenda
          modi, quae iste enim unde, aliquid velit fuga voluptatum temporibus atque. Assumenda,
          consectetur maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};
