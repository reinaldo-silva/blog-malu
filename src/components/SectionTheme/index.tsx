import { Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ImageComp from '../Image';

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
  return (
    <Flex
      height="auto"
      w="100%"
      padding="2rem 3rem"
      gap="2rem"
      flexDirection={invertComponents ? 'row-reverse' : 'row'}
    >
      <Flex width="calc(100% - 400px)" flexDirection="column" gap="2rem">
        <Heading
          w="100%"
          fontFamily="New york"
          fontWeight="normal"
          fontSize="4.5rem"
          id={id}
        >
          {title}
        </Heading>

        <Flex justifyContent="space-between" alignItems="flex-end">
          <Flex
            padding="1rem"
            height="auto"
            width="320px"
            bg={bg}
            borderRadius="92px 8px 92px 8px"
          >
            <Text lineHeight="1.3rem" fontSize="sm" padding="1rem">
              {description}
            </Text>
          </Flex>
          {learnMore && (
            <Link
              paddingRight="3rem"
              display="flex"
              alignItems="center"
              gap="0.5rem"
            >
              <Heading fontSize="small">Ver conteúdo completo</Heading>
              <Icon as={FaArrowRight} fontSize="sm" />
            </Link>
          )}
        </Flex>
      </Flex>
      <Flex
        width="40%"
        height="auto"
        borderRadius="92px 8px 92px 8px"
        justifyContent="center"
        padding="4rem 0"
      >
        <ImageComp
          src={srcImage}
          height="400px"
          width="300px"
          layout="fill"
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
};

export default SectionTheme;
