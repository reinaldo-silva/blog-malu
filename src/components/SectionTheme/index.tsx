import {
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ImagesGroups from '../ImagesGroups';

interface SectionThemeProps {
  invertComponents?: boolean;
  title: string;
  description: string;
  learnMore?: boolean;
  srcImage: string;
  bg: string;
  id: string;
}

const SectionTheme: React.FC<SectionThemeProps> = ({
  invertComponents,
  title,
  description,
  learnMore,
  srcImage,
  bg,
  id,
}) => {
  const [isLargerThan900] = useMediaQuery('(max-width: 900px)');
  const [isLargerThan650] = useMediaQuery('(max-width: 650px)');

  useEffect(() => {
    console.log(isLargerThan900);
  }, [isLargerThan900]);

  return (
    <Flex
      height="auto"
      w="100%"
      padding="2rem 3rem"
      gap="2rem"
      flexDirection={invertComponents ? 'row-reverse' : 'row'}
      marginBottom={isLargerThan650 ? '2rem' : '6rem'}
    >
      <Flex
        width={!isLargerThan900 ? 'calc(100% - 400px)' : 'auto'}
        flexDirection="column"
        justifyContent="space-between"
        alignItems={invertComponents ? 'flex-end' : 'flex-start'}
      >
        <Heading
          paddingLeft={invertComponents ? '0' : '2rem'}
          paddingRight={invertComponents ? '2rem' : '0'}
          fontFamily="New york"
          fontWeight="normal"
          fontSize={isLargerThan650 ? '3rem' : '4.5rem'}
          id={id}
          textAlign={isLargerThan900 ? 'center' : 'left'}
        >
          {title}
        </Heading>

        <Flex
          padding="1rem"
          height="auto"
          width={isLargerThan650 ? '100%' : '80%'}
          bg={bg}
          borderRadius="92px 8px 92px 8px"
          position="relative"
          flexDirection="column"
          alignItems="flex-end"
          gap="1rem"
        >
          <Text lineHeight="1.3rem" fontSize="sm" padding="1rem">
            {description}
          </Text>
          {learnMore && (
            <Link
              display="flex"
              alignItems="center"
              gap="0.5rem"
              bottom="0"
              right="0"
              py="1rem"
              paddingRight="3rem"
            >
              <Heading fontSize="small">Ver conteúdo completo</Heading>
              <Icon as={FaArrowRight} fontSize="sm" />
            </Link>
          )}
        </Flex>
      </Flex>
      {!isLargerThan900 && <ImagesGroups bg={bg} srcImage={srcImage} />}
    </Flex>
  );
};

export default SectionTheme;
