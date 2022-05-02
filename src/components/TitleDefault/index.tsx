import { Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TitleDefaultProps {
  children: ReactNode;
}

const TitleDefault: React.FC<TitleDefaultProps> = ({ children }) => {
  return (
    <Heading
      fontFamily="New york"
      fontWeight="normal"
      fontSize="6xl"
      color="#474747"
      width="100%"
      textAlign="center"
      padding="2rem 0 2rem"
    >
      {children}
    </Heading>
  );
};

export default TitleDefault;
