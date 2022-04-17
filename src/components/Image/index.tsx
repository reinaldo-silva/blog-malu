import { Flex } from '@chakra-ui/react';
import Image, { ImageProps as ImagePropsNext } from 'next/image';
import { useState } from 'react';

const customLoader = ({ src }: any) => {
  return src;
};

interface ImageProps extends ImagePropsNext {
  src: string;
  fallbackSrc?: string;
  width?: string;
  height?: string;
}

const ImageComp: React.FC<ImageProps> = ({
  src,
  fallbackSrc = '/images/placeholder-image.png',
  layout = 'fill',
  objectFit = 'contain',
  width = '100px',
  height = '100px',
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Flex width={width} height={height} position="relative">
      <Image
        {...rest}
        src={imageSrc}
        objectFit={objectFit}
        layout={layout}
        loader={customLoader}
        onError={() => {
          setImageSrc(fallbackSrc);
        }}
      />
    </Flex>
  );
};

export default ImageComp;
