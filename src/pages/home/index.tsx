import React from 'react';
import BodyPage from '../../components/BodyPage';
import SectionTheme from '../../components/SectionTheme';

const Home: React.FC = () => {
  return (
    <BodyPage>
      <SectionTheme
        title="Quem sou eu"
        description="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
        srcImage="/images/malu2.jpeg"
        bg="#d3c4be"
        id="me"
      />
      <SectionTheme
        title="Moda"
        description="
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
        srcImage="/images/moda.jpg"
        learnMore
        path="/fashion"
        bg="#c4bdac"
        id="fashion"
        invertComponents
      />

      <SectionTheme
        title="Make up"
        description="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eligendi dignissimos aspernatur inventore ullam, sunt explicabo voluptatibus optio dicta labore, neque repellendus sed commodi itaque consectetur voluptate provident perferendis. Labore alias cupiditate dolore, consequatur iure beatae tenetur, dolores rem voluptates itaque illo ipsam velit? Nam asperiores laudantium repellendus iste distinctio."
        srcImage="/images/make.jpeg"
        learnMore
        path="/makeUp"
        bg="#ebcfc4"
        id="make"
      />
    </BodyPage>
  );
};

export default Home;
