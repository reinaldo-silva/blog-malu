import { Text, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TextDefaultProps {
  children: ReactNode;
}

const TextDefault: React.FC<TextDefaultProps> = ({ children }) => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Text
      padding={isLargerThan700 ? '1rem 1.2rem' : '2rem 5rem'}
      fontSize={isLargerThan700 ? 'md' : 'lg'}
      lineHeight={isLargerThan700 ? '1.5rem' : '2rem'}
    >
      {children}
    </Text>
  );
};

export default TextDefault;
