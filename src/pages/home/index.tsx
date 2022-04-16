import { Center, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SectionTheme from '../../components/SectionTheme';

const Home: React.FC = () => {
  return (
    <Center alignItems="flex-start" height="100%" bg="#f8f8f8">
      <Flex
        maxW="1100px"
        w="100%"
        height="100%"
        flexDirection="column"
        bg="#f4efec"
        boxShadow="2xl"
      >
        <Header />
        <Flex
          width="100%"
          justifyContent="space-evenly"
          bg="#f8f8f8"
          padding="1rem"
        >
          <Link href="#moda">Moda</Link>
          <Link href="#veg">Vegetarianismo</Link>
        </Flex>
        <SectionTheme
          title="Quem sou eu"
          description="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
          srcImage="/images/malu2.jpeg"
          bg="#f0d9d1"
          id="me"
        />
        <SectionTheme
          title="Moda"
          description="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
          srcImage="/images/moda.jpg"
          learnMore
          bg="#ddb7ac"
          id="moda"
          invertComponents
        />

        <SectionTheme
          title="Vegetarianismo"
          description="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
          srcImage="/images/veg.jpeg"
          learnMore
          bg="#999b85"
          id="veg"
        />

        <Footer />
      </Flex>
    </Center>
  );
};

export default Home;
