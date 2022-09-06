import { Card } from './card';

import { projects } from '../content/projects.js';

import { CardFooter } from './card_footer';

import styles from './grid.module.css';

export const Grid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.row}>
        {projects.slice(0, 3).map((item) => (
          <Card
            header={item.project}
            content={item.description}
            footer={<CardFooter github={item.github} deployed={item.deployed} />}
            src={item.image}
            href={item.deployed}
          />
        ))}
      </div>
      <div className={styles.row}>
        {projects.slice(3, 6).map((item) => (
          <Card
            header={item.project}
            content={item.description}
            footer={<CardFooter github={item.github} deployed={item.deployed} />}
            src={item.image}
            href={item.deployed}
          />
        ))}
      </div>
    </div>
  );
};

// {
//     "project": "VaxDash.us",
//     "github": "https://github.com/Lifeshack/vax-dash",
//     "deployed": "https://vaxdash.us/",
//     "description":
//         "This platform allows users to make an informed decision about whether or not to get the COVID-19 vaccine, view the vaccination progress, determine vaccine eligibility in their state, and locate vaccine clinics."
// },
