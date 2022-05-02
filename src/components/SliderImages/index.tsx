import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import ImageComp from '../Image';

interface ImageProps {
  marginTop?: boolean;
  fullScreen?: boolean;
  src: string;
  setFullScreen?: (value: boolean) => void;
  setCurrentImage?: (value: number) => void;
  id: number;
}

const Imagem: React.FC<ImageProps> = ({
  marginTop,
  fullScreen,
  src,
  id,
  setCurrentImage,
  setFullScreen,
}) => {
  const handleClick = useCallback(() => {
    setCurrentImage && setCurrentImage(id);
    setFullScreen && setFullScreen(true);
  }, [id, setCurrentImage, setFullScreen]);

  return (
    <Flex
      marginTop={marginTop ? '2rem' : undefined}
      height={fullScreen ? '600px' : '190px'}
      width={fullScreen ? '100%' : '150px'}
      cursor="pointer"
      onClick={handleClick}
    >
      <ImageComp src={src} width="100%" height="100%" />
    </Flex>
  );
};

interface ImageItemProps {
  id: number;
  src: string;
}

interface SliderImages {
  images: ImageItemProps[];
}

const SliderImages: React.FC<SliderImages> = ({ images }) => {
  const [imageFullScreen, setImageFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      {imageFullScreen && (
        <>
          <Flex
            position="fixed"
            top="0"
            left={`-${(currentImage - 1) * 100}vw`}
            transition="0.6s"
            height="100vh"
            zIndex={10}
            overflow="hidden"
            bg="linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 42.08%, rgba(0,0,0,0.7) 100%);"
          >
            {images.map((image) => (
              <Flex
                key={image.id}
                width="100vw"
                height="100%"
                alignItems="center"
              >
                <Imagem id={image.id} fullScreen src={image.src} />
              </Flex>
            ))}
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            position="fixed"
            height="100vh"
            top="0"
            left="0"
            width="100%"
            zIndex={11}
          >
            <Flex
              cursor="pointer"
              width="200px"
              height="100%"
              bg="rgba(0,0,0,0.5)"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                setCurrentImage((oldValue) =>
                  oldValue === 1 ? images.length : oldValue - 1
                )
              }
            >
              <Icon
                as={MdOutlineKeyboardArrowLeft}
                fontSize="5xl"
                color="#f8f8f8"
              />
            </Flex>
            <Flex
              width="calc(100% - 400px)"
              height="auto"
              justifyContent="center"
              alignItems="center"
              color="#f8f8f8"
              cursor="pointer"
              gap="0.2rem"
              padding="2rem 0"
              onClick={() => setImageFullScreen(false)}
            >
              <Text fontWeight="bold" fontSize="lg">
                Fechar
              </Text>
              <Icon as={IoCloseSharp} fontSize="lg" />
            </Flex>
            <Flex
              cursor="pointer"
              width="200px"
              height="100%"
              bg="rgba(0,0,0,0.5)"
              alignItems="center"
              justifyContent="center"
              onClick={() =>
                setCurrentImage((oldValue) =>
                  oldValue === images.length ? 1 : oldValue + 1
                )
              }
            >
              <Icon
                as={MdOutlineKeyboardArrowRight}
                fontSize="5xl"
                color="#f8f8f8"
              />
            </Flex>
          </Flex>
        </>
      )}
      <Flex>
        <Flex
          width="calc(100% - 400px)"
          justifyContent="center"
          gap="1rem"
          flexDirection="column"
          marginTop="2rem"
        >
          <Flex justifyContent="center">
            {images.map((image) => {
              return (
                image.id <= 4 && (
                  <Imagem
                    id={image.id}
                    key={image.id}
                    marginTop={image.id % 2 === 0}
                    src={image.src}
                    setCurrentImage={setCurrentImage}
                    setFullScreen={setImageFullScreen}
                  />
                )
              );
            })}
          </Flex>
          <Flex height="auto" width="100%" flexDirection="column">
            <Text padding="1rem 5rem" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum id
              pariatur eligendi ullam fuga fugit nam eaque molestias quas non
              corrupti at dolorum consequatur repudiandae quos ea, ipsa beatae.
              Ab dolor, consequatur laborum dolorem recusandae veritatis unde.
              Porro nesciunt soluta aliquid ipsam quidem quasi. Quaerat
              laudantium rerum veniam inventore voluptatem.
            </Text>
          </Flex>
        </Flex>
        <Flex
          height="auto"
          width="400px"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          paddingY="2rem"
          flexDirection="column"
        >
          <Flex
            height="200px"
            width="80%"
            bg="#c4bdac"
            borderRadius="80px 8px 80px 8px"
          />
          <Flex
            height="150px"
            width="150px"
            bg="#c4bdac50"
            borderRadius="50%"
            position="absolute"
            top="150px"
            right="30px"
          />
          <Button
            bg="#c4bdac"
            _hover={{ background: '#c4bdac50' }}
            onClick={() => setImageFullScreen(true)}
          >
            Ver todas as fotos
          </Button>
          <Heading
            position="absolute"
            fontFamily="New york"
            fontWeight="normal"
            fontSize="3rem"
            color="#474747"
            width="100%"
            paddingRight="2rem"
            paddingTop="2rem"
          >
            Fotos da coleção
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default SliderImages;
