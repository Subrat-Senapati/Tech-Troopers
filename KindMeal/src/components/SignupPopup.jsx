import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, VStack, Box, Text, Image, Flex } from '@chakra-ui/react';


const SignupPopup = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay 
      bg='none'
      backdropFilter='auto'
      backdropBlur='0.6px'
      />
      <ModalContent maxWidth="590px">
        <ModalHeader justifyContent="center" textAlign="center">
            <Image src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="KindMeal.my"/>
            <Text fontWeight="bold">Join KindMeal For FREE Now</Text>
            <Text fontSize="sm">Please select the type of membership to proceed</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={3}>
            <Box  borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} width="100%" textAlign="center">
              <Flex flexDirection='row'>
              <Image boxSize="140px" src="https://www.kindmeal.my/images/join_normal.png" alt="Food Lover" mb={2} />
              <Flex flexDirection='column' justifyContent='center' textAlign='left' margin='10px'>
              <Text fontWeight="bold">Food Lover</Text>
              <Text fontSize="sm">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
              </Flex>
              </Flex>
              <Button mt={2} colorScheme="teal"> Join as Food Lover</Button>
              
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%" textAlign="center">
              <Flex flexDirection='row'>
              <Image boxSize="140px" src="https://www.kindmeal.my/images/join_shop.png" alt="Restaurant / Shop Owner" mb={2} />
              <Flex flexDirection='column' justifyContent='center' textAlign='left' margin='10px'>
              <Text fontWeight="bold">Restaurant / Shop Owner</Text>
              <Text fontSize="sm">List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
              </Flex>
              </Flex>
              <Button mt={2} colorScheme="teal">Join as Restaurant Owner</Button>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignupPopup;

