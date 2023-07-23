import React from 'react';
import Container from '../../components/Container/Container';
import { useLoaderData } from 'react-router-dom';

const CollageInfo = () => {
   const details = useLoaderData();
  console.log(details);
  
  return (
    <div>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus facilis, maxime magni optio culpa harum similique asperiores ratione voluptatum deleniti, rem architecto et delectus debitis ad blanditiis laborum dolorum? Libero omnis ab repudiandae. Incidunt totam facere omnis, officiis praesentium culpa sapiente sint, excepturi possimus quaerat, libero rem! Fugiat est dolor vero atque praesentium beatae placeat necessitatibus illum aperiam a fugit adipisci repudiandae reiciendis velit quisquam, nulla autem sunt. Voluptate porro deserunt beatae velit, sequi sapiente adipisci eius optio quos quis animi exercitationem ipsum veritatis ut quia, vero, maxime fugit. Magni voluptatibus, modi veritatis qui optio itaque deserunt incidunt eos.
      </Container>
    </div>
  );
};

export default CollageInfo;