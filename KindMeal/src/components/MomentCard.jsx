
import { Box, Image, Text, HStack, VStack, Avatar, Button, Spacer, } from "@chakra-ui/react";
import { FaHeart, FaComment, FaCamera } from 'react-icons/fa';

const MomentCard = ({ moment }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow='hidden' width='350px'>

      <Box >
        <HStack  p='5px' mt='-10px' mb='-10px'>
          <Avatar name={moment.user} src={moment.avatar}/>
          <VStack align="start" spacing='5px' >
            <Text mt='10px'>{moment.user}</Text>
            <Text mt='-20px' fontSize="sm" color="grey">{moment.date}</Text>
          </VStack>
          <Spacer/>
          <Button colorScheme="red">View</Button>
        </HStack>
      <Image src={moment.image} alt="Food" maxHeight='250px' width='100%' mb='-20px'/>

        
        <HStack mt="4" justifyContent='Center' spacing='20px'>
            <FaHeart color="grey" />
            <Text mt='15px' color='grey'>3</Text>
            <FaCamera color="grey"/>
            <Text mt='15px' color='grey'>5</Text>
            <FaComment  color="grey" />
            <Text mt='15px' color='grey'>2</Text>
        </HStack>
          <Text fontSize="sm" pl='20px' pr='10px'>{moment.description}</Text>
      </Box>
    </Box>
  );
};

export default MomentCard;
