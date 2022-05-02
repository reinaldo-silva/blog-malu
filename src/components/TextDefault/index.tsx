import { Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface TextDefaultProps {
  children: ReactNode;
}

const TextDefault: React.FC<TextDefaultProps> = ({ children }) => {
  return (
    <Text padding="2rem 5rem" fontSize="lg" lineHeight="2rem">
      {children}
    </Text>
  );
};

export default TextDefault;
