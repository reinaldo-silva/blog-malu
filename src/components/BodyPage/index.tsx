import { Center, Flex, Heading, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface BodyPageProps {
  children: ReactNode;
}

interface LinkPageProps {
  description: string;
  href: string;
  path: string;
}

const LinkPage: React.FC<LinkPageProps> = ({ description, href, path }) => {
  const { pathname, push } = useRouter();

  return (
    <Link href={href}>
      <Heading
        _hover={{ borderBottom: '4px solid #e98064' }}
        padding="1rem 2rem 0.75rem"
        fontSize="md"
        fontWeight="medium"
        borderBottom={`4px solid ${
          pathname === path ? '#e98064' : 'transparent'
        }`}
        onClick={() => {
          pathname !== '/home' && push(path);
        }}
      >
        {description}
      </Heading>
    </Link>
  );
};

const BodyPage: React.FC<BodyPageProps> = ({ children }) => {
  return (
    <Center
      alignItems="flex-start"
      w="auto"
      bg="#efeeee"
      color="#474747"
      position="relative"
    >
      <Flex
        maxW="1100px"
        w="100%"
        flexDirection="column"
        bg="#f4efec"
        boxShadow="2xl"
        position="relative"
      >
        <Flex
          flexDirection="column"
          position="fixed"
          maxW="1100px"
          width="100%"
          zIndex={200}
          boxShadow="md"
        >
          <Header />
          <Flex
            width="100%"
            justifyContent="space-evenly"
            bg="#f8f8f8"
            height="50px"
          >
            <LinkPage path="/fashion" description="Moda" href="#fashion" />
            <LinkPage path="/makeUp" description="Make up" href="#make" />
          </Flex>
        </Flex>

        <Flex
          maxHeight="calc(100vh - 150px)"
          flexDirection="column"
          marginTop="150px"
          height="100%"
          width="auto"
          overflowY="scroll"
          scrollBehavior="smooth"
        >
          {children}
          <Footer />
        </Flex>
      </Flex>
    </Center>
  );
};

export default BodyPage;
