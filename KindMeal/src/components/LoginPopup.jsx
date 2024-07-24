import React from 'react';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Text,
  VStack,
  StackDivider,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const LoginPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
      class="px-3 py-0 mx-2"
      style={{
        height: "1.7rem",
        borderRadius: ".5rem",
        border: "none",
        backgroundColor: "#666666",
        color: "#ffffff",
      }}
       onClick={onOpen}>Email</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
          <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="Food Lover" mb={2} />
          <Text>Member Login</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <Input placeholder='Your Email' mb={3} />
            <Input placeholder='Your Password' type='password' />

            <VStack divider={<StackDivider/>}>
            <Button colorScheme='green' mr={3} onClick={onClose} margin='10px'>
              Login
            </Button>
          
            <Button colorScheme='blue' onClick={onClose} >
              Login with Facebook
            </Button>
          </VStack>
          </ModalBody>
          <Flex>
          <Button variant='link'>Forgot Password?</Button>
          <Spacer/>
          <Button variant='link'>Not a member? Sign up FREE!</Button>
          </Flex>

          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginPopup;