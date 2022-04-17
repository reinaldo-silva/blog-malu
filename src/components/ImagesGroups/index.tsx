import { Flex, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import ImageComp from '../Image';

interface ImageGroupsProps {
  srcImage: string;
  bg: string;
}

const animationKeyframes = keyframes`
  0% { 
    opacity: 0;
    transform: scale(0.95);
  }
  50% { 
    opacity: 0.5;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1); 
  }
`;

const animation = `${animationKeyframes} 1.5s ease-in-out`;

const ImagesGroups: React.FC<ImageGroupsProps> = ({ srcImage, bg }) => {
  return (
    <Flex
      as={motion.div}
      animation={animation}
      position="relative"
      width="400px"
      justifyContent="center"
      alignItems="center"
    >
      <Flex width="290px" height="400px" zIndex={90}>
        <ImageComp src={srcImage} width="260px" height="100%" />
      </Flex>

      <Flex
        width="260px"
        height="320px"
        position="absolute"
        zIndex={100}
        bottom="-85px"
        right="-50px"
      >
        <ImageComp src="/images/risco.svg" width="100%" height="100%" />
      </Flex>

      <Flex
        position="absolute"
        height="200px"
        width="150px"
        zIndex={80}
        bg={bg}
        opacity="0.7"
        bottom="0"
        left="30px"
      />
    </Flex>
  );
};

export default ImagesGroups;
