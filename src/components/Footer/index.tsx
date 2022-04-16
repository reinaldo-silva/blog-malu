import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <Flex
      width="100%"
      padding="2rem"
      bg="#E7D6D0"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        fontSize="x-small"
        color="#e98064"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Blog pessoal
      </Heading>
      <Logo />
      <Text fontSize="sm" maxW="600px" textAlign="center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat
        sequi nisi nam repellendus ab architecto provident odio quae tempora.
      </Text>
    </Flex>
  );
};

export default Footer;
