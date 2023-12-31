import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', 96]}
          m={'auto'}
          my={16}
        >
          <Heading alignSelf={'center'}>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={24}></Avatar>
          <Input
            placeholder={'Name'}
            type="text"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Input
            placeholder={'Email'}
            type="email"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Input
            placeholder={'Password'}
            type="password"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Button variant={'link'} alignSelf={'end'}>
            <Link to="/forgetpassword">Forget Password</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Log In
          </Button>

          <Text textAlign={'right'}>
            Already have an Account?{' '}
            <Button variant={'link'} colorScheme="purple" type="submit">
              <Link to="/login"> Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
