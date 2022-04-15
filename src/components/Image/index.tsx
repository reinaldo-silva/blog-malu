import { Flex } from '@chakra-ui/react';
import Image, { ImageProps as ImagePropsNext } from 'next/image';
import { useState } from 'react';

const customLoader = ({ src }: any) => {
  return src;
};

interface ImageProps extends ImagePropsNext {
  src: string;
  flipImage?: boolean;
  fallbackSrc?: string;
  border?: boolean;
  width?: string;
  height?: string;
}

const ImageComp: React.FC<ImageProps> = ({
  src,
  fallbackSrc = '/images/placeholder-image.png',
  flipImage = false,
  layout = 'fixed',
  objectFit = 'contain',
  width = '10px',
  height = '10px',
  border,
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Flex
      borderRadius="8px"
      border={border ? '4px solid' : ''}
      width={width}
      height={height}
      borderColor={border ? 'face2Go.white.50.8' : ''}
      style={{ transform: `scaleX(${flipImage ? '-1' : '1'})` }}
    >
      <Image
        {...rest}
        src={imageSrc}
        layout={layout}
        objectFit={objectFit}
        width={width}
        height={height}
        loader={customLoader}
        onError={() => {
          setImageSrc(fallbackSrc);
        }}
      />
    </Flex>
  );
};

export default ImageComp;
