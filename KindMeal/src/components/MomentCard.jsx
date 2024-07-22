// src/components/MomentCard.jsx
import { Box, Button, Flex, Image, Text, Spacer } from '@chakra-ui/react';

const MomentCard = ({ moment }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" margin="15px">
    <Flex justifyContent='center' alignContent='center'>
    <Text margin='5px' fontWeight="bold" fontSize="xl">{moment.title}</Text>
    <Spacer/>
    <Button margin='5px' colorScheme='red'>View</Button>
    </Flex>
    <Image margin='5px' boxSize='300px' src={moment.image} alt={moment.title} />
    <Box p={4}>
      {/*  */}
      <Text mt={2}>{moment.description}</Text>
    </Box>
  </Box>
);

export default MomentCard;
