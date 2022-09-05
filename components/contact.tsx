import React, { useState } from 'react';

import styles from './contact.module.css';
import picture from '../public/assets/LinkedinSoft.png';
import { Card } from './card';

export const Contact = () => {
  const handleMail = () => window.open(`mailto:nick.guimarais@gmail.com`);
  const [active, setActive] = useState(false);
  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <div className={styles.wrapper}>
      <Card
        link
        onClick={handleMail}
        layout="responsive"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={picture}
        header={null}
        content={
          <div className={styles.content}>
            <p className={active ? styles.link : styles.inactive}>
              <span>Email:</span> nick.guimarais@gmail.com
            </p>
            <p>Phone: (818) 235-8076</p>
          </div>
        }
        footer={null}
      />
    </div>
  );
};
