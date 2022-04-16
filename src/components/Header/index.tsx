import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import Logo from '../Logo';

const Header: React.FC = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem 3rem"
    >
      <span>contatos</span>
      <Logo />
      <Icon as={MdOutlineMenu} fontSize="2rem" />
    </Flex>
  );
};

export default Header;
