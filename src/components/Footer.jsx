import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Stack,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={40} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'}>
            <Input
              type="email"
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            ></Input>
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All Rights Received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a target={'blank'} href="www.youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target={'blank'} href="www.instagram.com">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target={'blank'} href="https://github.com/Saksham-Geek">
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/saksham-pethkar-9256411aa/"
            >
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
