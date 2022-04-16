import { Flex } from '@chakra-ui/react';
import React from 'react';

const Divider: React.FC = () => {
  return (
    <Flex width="100%" height="30px" padding="2rem">
      <Flex height="1px" width="100%" bg="#47474750" />
    </Flex>
  );
};

export default Divider;
