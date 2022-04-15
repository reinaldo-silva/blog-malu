import { Flex, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem 3rem"
    >
      <span>contatos</span>
      <Heading fontFamily="Yeseva one" fontWeight="normal" fontSize="3.6rem">
        DeVil
      </Heading>
      <Icon as={MdOutlineMenu} fontSize="2rem" />
    </Flex>
  );
};

export default Header;