import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <h1>Hello world</h1>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
};
