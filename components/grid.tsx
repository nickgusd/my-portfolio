import React from 'react';

import { useMediaQuery } from 'react-responsive';

import { Card } from './card';

import { CardFooter } from './card_footer';

import styles from './grid.module.css';

export const Grid = ({ data }) => {
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1441px)' });
  return (
    <div className={isDesktopLarge ? styles.desktopContainer : styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.row}>
        {data.slice(0, 3).map(({ github, project, image, deployed, description, stack }) => (
          <Card
            onClick={null}
            experience={false}
            contact={false}
            header={project}
            content={description}
            footer={<CardFooter github={github} deployed={deployed} stack={stack} />}
            src={image}
            href={deployed}
          />
        ))}
      </div>
      <div className={styles.row}>
        {data.slice(3, 6).map(({ github, project, image, deployed, description, stack }) => (
          <Card
            onClick={null}
            experience={false}
            contact={false}
            header={project}
            content={description}
            footer={<CardFooter github={github} deployed={deployed} stack={stack} />}
            src={image}
            href={deployed}
          />
        ))}
      </div>
    </div>
  );
};
