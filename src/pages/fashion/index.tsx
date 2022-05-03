import React from 'react';
import BodyPage from '../../components/BodyPage';
import SliderImages from '../../components/SliderImages';
import TextDefault from '../../components/TextDefault';
import TitleDefault from '../../components/TitleDefault';

const Fashion: React.FC = () => {
  const images = [
    { id: 1, src: '/images/malu.jpeg' },
    { id: 2, src: '/images/malu2.jpeg' },
  ];
  return (
    <BodyPage>
      <TitleDefault>Moda</TitleDefault>

      <TextDefault>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a maxime
        magnam. Velit numquam nobis veniam possimus a temporibus quo deserunt,
        modi illo optio accusantium facere iste, harum, repudiandae eligendi
        quos. Debitis, sed corrupti. Ad aspernatur dicta odio quam laudantium
        officia excepturi fugiat illum, qui, reprehenderit nobis, mollitia vero
        eius!
      </TextDefault>

      <SliderImages images={images} />

      <TextDefault>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        molestias harum reprehenderit iusto suscipit, ipsam distinctio corrupti
        asperiores corporis deleniti cupiditate. Unde quos atque reiciendis sed
        porro voluptatum corrupti. Alias beatae, repellat laudantium debitis
        distinctio itaque exercitationem accusamus officia, provident expedita
        enim est voluptatem velit quia laboriosam unde tempore, placeat sed et
        excepturi. Porro hic, voluptatum illum culpa velit officia tempora
        incidunt suscipit expedita et minus libero. Quisquam laboriosam,
        doloremque excepturi hic, doloribus obcaecati repellat aliquid natus
        aperiam commodi exercitationem vel laborum nam vitae et earum soluta
        quos ea voluptatem suscipit ipsum molestiae voluptatum veniam?
        Voluptatibus quod, incidunt iste possimus architecto totam qui laborum
        aut? Animi omnis aperiam cupiditate, excepturi laboriosam cum assumenda
        eum dolore minima, rerum rem corrupti illo eligendi maiores quaerat?
        Dolores aut deleniti quod. Accusamus, modi? Laboriosam, deserunt sequi?
        A natus odit repudiandae velit harum reprehenderit dolor amet
        accusantium eos vitae maxime officiis, dignissimos omnis at commodi,
        distinctio quo hic? Error et perspiciatis autem repellat veniam! Quo
        aliquam consequuntur distinctio explicabo quidem laborum itaque ea
        vitae, dignissimos nihil doloribus magni? Dolore doloremque magnam
        similique, mollitia amet natus velit dolorum! Quas neque, minus rerum
        aliquam nulla architecto quia delectus necessitatibus facere, obcaecati
        magnam pariatur quo. Ab, earum magni. Enim inventore illo impedit
        reprehenderit incidunt debitis placeat eius, nihil facere officia, illum
        voluptate velit. Eveniet, non? Magnam assumenda totam natus error
        ducimus facere libero explicabo voluptatum neque ab necessitatibus,
        minus architecto, eveniet facilis odio sunt. Voluptatem minus quam earum
        praesentium magni illum soluta rerum recusandae officia vel iste sit
        voluptatum consectetur, dolore laudantium natus deserunt laborum nihil
        voluptates reprehenderit distinctio hic, ea temporibus? Iure, voluptates
        corporis. Ducimus ipsum quibusdam neque vero sint maiores animi tempore
        aperiam quasi, quos harum iste quam blanditiis perferendis pariatur
        exercitationem dignissimos necessitatibus facilis debitis facere nisi
        voluptatem aut? Sapiente iusto voluptates fugit consequatur unde.
      </TextDefault>
    </BodyPage>
  );
};

export default Fashion;
