import React from 'react';

import { Button } from './button';

import styles from './about.module.css';

export const About = () => {
  return (
    <div className={styles.wrapper}>
      <p>Hello, my name is</p>
      <h1>Nick Guimarais</h1>
      <h2>I am a Software Engineer</h2>
      <div>
        I specialize in building User Interfaces for web applications! I have experience working on
        large client projects as well as experience working on large user facing platforms.
      </div>
      <Button />
    </div>
  );
};
