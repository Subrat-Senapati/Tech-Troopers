import React from 'react';
import { Box, Image, Text, IconButton, Avatar, HStack, Stack, Button, Spacer, VStack} from '@chakra-ui/react';
import {ViewIcon} from '@chakra-ui/icons';
import { FaHeart, FaComment} from 'react-icons/fa';
import { BiAlarm } from "react-icons/bi";
import { px } from 'framer-motion';

const RecipeCard = ({recipe}) => {
  return (
    <Box height="m" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <HStack p="4">
        <Avatar src={recipe.avatar} name="MayNg" />
        <Text fontWeight="bold" marginTop={3}>{recipe.user}</Text>
        <Spacer/>
        <Button colorScheme='red'>View</Button>
      </HStack>
      <VStack>
      <Image boxSize='300px' objectFit='cover' src={recipe.image} alt={recipe.name} />
      
      </VStack>
   
      <Text fontSize="lg" fontWeight="bold" backgroundColor="black"  textAlign='center' color={"white"}>
          {recipe.name}
      </Text>
      

      <Box p="6">

        <Stack direction="row" justify="space-between" align="center" mt={"-30px"}>
          <HStack spacing="2">
          <BiAlarm /><Text mt={'15px'}>:{recipe.time}</Text>
          </HStack>
          <HStack spacing="2">
             <FaHeart />
            <Text marginTop={"4"}>{recipe.like}</Text>
            <FaComment />
            <Text marginTop={"4"}>{recipe.comment}</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecipeCard;