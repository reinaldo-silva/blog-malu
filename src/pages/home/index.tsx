import { Center, Divider, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import SectionTheme from '../../components/SectionTheme';

const Home: React.FC = () => {
  return (
    <Center alignItems="flex-start" height="100%" bg="#f8f8f8">
      <Flex
        maxW="1100px"
        w="100%"
        height="100%"
        flexDirection="column"
        bg="#f4efec"
        boxShadow="2xl"
        gap="1rem"
      >
        <Header />
        <Flex
          width="100%"
          justifyContent="space-evenly"
          bg="#f8f8f8"
          padding="1rem"
        >
          <Link>Moda</Link>
          <Link>Vegetarianismo</Link>
        </Flex>
        <SectionTheme />
        <Divider colorScheme="red" />
        <SectionTheme invertComponents />
        <Divider />
        <SectionTheme />
      </Flex>
    </Center>
  );
};

export default Home;
