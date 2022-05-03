import { Heading, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TitleDefaultProps {
  children: ReactNode;
}

const TitleDefault: React.FC<TitleDefaultProps> = ({ children }) => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Heading
      fontFamily="New york"
      fontWeight="normal"
      fontSize={isLargerThan700 ? '5xl' : '6xl'}
      color="#474747"
      width="100%"
      textAlign="center"
      paddingY={isLargerThan700 ? '1rem' : '2rem'}
    >
      {children}
    </Heading>
  );
};

export default TitleDefault;
