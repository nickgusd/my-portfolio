import type { NextPage } from 'next';

import React from 'react';

import { Portfolio } from '../pages/components/portfolio';
import Layout from "../pages/components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
};

export default Home;
