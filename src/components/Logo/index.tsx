import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Logo: React.FC = () => {
  const { push } = useRouter();

  return (
    <Heading
      fontFamily="Yeseva one"
      fontWeight="normal"
      fontSize="3.6rem"
      onClick={() => push('/home')}
      cursor="pointer"
    >
      DeVil
    </Heading>
  );
};

export default Logo;
