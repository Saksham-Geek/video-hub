import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  size: '4xl',
  p: 4,
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          w={'fit-content'}
          py={2}
          borderBottom={'2px solid'}
          textTransform={'uppercase'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={[40, 400]} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'wider'}
            lineHeight={'190%'}
            padding={[3, 12]}
            textAlign={'justify'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            debitis hic eaque cumque itaque est inventore magni nobis ipsum
            aperiam, perspiciatis sed ratione harum optio id dolores. Incidunt
            placeat sit facere minima aliquam dicta totam, temporibus recusandae
            porro dignissimos obcaecati? Voluptatibus dolore, modi maxime ea
            excepturi natus ut assumenda inventore maiores ducimus esse expedita
            eaque vel animi cum pariatur voluptate explicabo totam dignissimos
            nihil. Mollitia officia nam placeat suscipit? Eveniet adipisci ab
            recusandae? Ex vitae tempore maxime odio libero saepe quia sit quasi
            ratione modi placeat itaque nesciunt possimus porro magnam
            consequatur magni, recusandae eligendi. Dolor laborum inventore
            cupiditate perferendis?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          WE ARE FUTURE
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Conquer the Future
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
