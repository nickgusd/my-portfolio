import { Card } from './card';

import { CardFooter } from './card_footer';

import styles from './grid.module.css';

export const Grid = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.row}>
        {data.slice(0, 3).map(({ github, project, image, deployed, description }) => (
          <Card
            header={project}
            content={description}
            footer={<CardFooter github={github} deployed={deployed} />}
            src={image}
            href={deployed}
          />
        ))}
      </div>
      <div className={styles.row}>
        {data.slice(3, 6).map(({ github, project, image, deployed, description }) => (
          <Card
            header={project}
            content={description}
            footer={<CardFooter github={github} deployed={deployed} />}
            src={image}
            href={deployed}
          />
        ))}
      </div>
    </div>
  );
};
