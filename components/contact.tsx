import React from 'react';
import Image from 'next/image';

import styles from './contact.module.css';
import picture from '../public/assets/LinkedinSoft.png';
// import LinkedinSoft from '../public/assets/LinkedinSoft.png';
import { Card } from './card';

export const Contact = () => {
  const handleMail = () => window.open(`mailto:nick.guimarais@gmail.com`);
  return (
    <div className={styles.wrapper}>
      <Card
        src={picture}
        header={null}
        content={
          <div className={styles.content}>
            <p onClick={handleMail}>Email: nick.guimarais@gmail.com</p>
            <p>Phone: (818) 235-8076</p>
          </div>
        }
        footer={null}
      />
    </div>
  );
};
