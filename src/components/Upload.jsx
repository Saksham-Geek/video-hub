import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <VStack color={'purple.500'} justifyContent={'center'} height={'full'}>
        <AiOutlineCloudUpload size={'10vMax'} />
        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100%+36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  backgroundColor: 'white',
                  color: 'purple',
                  cursor: 'pointer',
                },
              }}
            ></Input>
            <Button type="submit" colorScheme="purple">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
