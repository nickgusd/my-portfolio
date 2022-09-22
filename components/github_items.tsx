import { useState } from 'react';
import styles from './github_items.module.css';
import { Card } from '../components/card';
import github from '../public/github-logo-filled.svg';
import githubActive from '../public/github-logo-active.svg';

export const GithubItems = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const onMouseEnter = () => {
    setActive(true);
  };
  const onMouseLeave = () => {
    setActive(false);
  };
  const onMouseEnter2 = () => {
    setActive2(true);
  };
  const onMouseLeave2 = () => {
    setActive2(false);
  };

  return (
    <div className={styles.container}>
      <h1>Github Accounts</h1>
      <div className={styles.cardWrapper}>
        <Card
          link
          layout="responsive"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={null}
          experience={false}
          contact={false}
          header={<h2>Personal</h2>}
          src={!active ? github : githubActive}
          href="https://github.com/nickgusd"
          footer={
            <div style={{ textAlign: 'center' }}>
              <h3>Nickgusd</h3>
            </div>
          }
        />
        <Card
          link
          layout="responsive"
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          onClick={null}
          experience={false}
          contact={false}
          header={<h2>Work</h2>}
          src={!active2 ? github : githubActive}
          href="https://github.com/NickGDemyst"
          footer={
            <div style={{ textAlign: 'center' }}>
              <h3>NickGDemyst</h3>
            </div>
          }
        />
      </div>
    </div>
  );
};
