import { Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ImageComp from '../Image';

interface SectionThemeProps {
  invertComponents?: boolean;
}

const SectionTheme: React.FC<SectionThemeProps> = ({ invertComponents }) => {
  return (
    <Flex
      height="auto"
      w="100%"
      padding="1rem 3rem"
      gap="2rem"
      flexDirection={invertComponents ? 'row-reverse' : 'row'}
    >
      <Flex width="calc(100% - 400px)" flexDirection="column" gap="2rem">
        <Heading
          w="100%"
          fontFamily="New york"
          fontWeight="normal"
          fontSize="5rem"
        >
          Quem sou eu
        </Heading>

        <Flex justifyContent="space-between" alignItems="flex-end">
          <Flex
            padding="1rem"
            height="auto"
            width="320px"
            bg="#ddb7ac"
            borderRadius="92px 8px 92px 8px"
          >
            <Text lineHeight="1.3rem" fontSize="sm" padding="1rem">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              assumenda aliquam nihil, tempora rem repudiandae dignissimos
              praesentium ratione alias aspernatur saepe officia inventore
              architecto consequatur delectus dicta dolore dolor voluptate
              asperiores? Quas, ducimus omnis vel, rem, optio beatae sed
              aspernatur ratione explicabo neque repellendus quae. Unde sed
              doloribus et ipsum vel asperiores dolorem dignissimos incidunt
              consectetur, voluptas sequi iste veritatis.
            </Text>
          </Flex>
          <Link
            paddingRight="3rem"
            display="flex"
            alignItems="center"
            gap="0.5rem"
          >
            <Heading fontSize="small">Saiba mais</Heading>
            <Icon as={FaArrowRight} fontSize="sm" />
          </Link>
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
          src="/images/malu.jpeg"
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
