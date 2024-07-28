import React from 'react';
import { Box, Container, Image, Flex, Button, ButtonGroup, Spacer, Input, Select, Text, Card, VStack, HStack} from '@chakra-ui/react';
import MomentsList from './MomentsList';

  const KindMealsHome = () => (
    <div>
      <Box pl='100px' pr='100px'>
      
      <HStack bg='#ececec' pl='100px' ml='-100px' pr='100px' mr='-100px' justifyContent='center'>
  <Box backgroundColor='#ececec' p='20px 0px'>
    <HStack>
  <Text fontSize='2xl'>KindMoments    </Text>
  <Text fontSize='2xl' color='grey'>|    Saving Lives with Yummy Photos</Text>
    </HStack>      
  <Text>Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.</Text>
  <Text>Download our mobile app to easily showcase your masterpieces and interact with food lovers.</Text>
  <Text>Get started sharing your tasty moments now.</Text>
  </Box>
  <Spacer/>
      <Box borderRadius='10px' backgroundColor='white' textAlign='center'>
        <VStack backgroundColor='white' borderRadius='10px'>
        <Text fontSize='xl' >Share Your KindMoment</Text>
        <Text fontSize='m' fontStyle='bold'>Interesting food or restaurant? Share with 1000s of food lovers!</Text>
        <Button colorScheme='red' width='200px' mb='10px'>Share</Button>
        </VStack>
      </Box> 
      </HStack>
  
      <Flex mt='20px' mb='20px' minWidth='max-content' alignItems='center' gap='2'>
      <ButtonGroup gap='2'>
        <Button colorScheme='green' width='150px'> Moments</Button>
        <Button width='150px'>Deal Reviews</Button>
        <Button width='150px'>Following</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup gap='2'>
        <Input width='250px' placeholder='Search User or Shop'/>
        <Select width='200px' placeholder='All locations'>

        </Select>
        <Button colorScheme='red' width='100px'>Search</Button>
      </ButtonGroup>
  </Flex>
  <Flex justifyContent={"space-between"} width={"30%"} color={'blue'} margin='15px 0px'>
  <Text pt='15px' color='grey'>Page:  </Text>
    <button class="item"><a class="link" href="#"  >1</a></button>
    <button class="item"><a class="link" href="#" >2</a></button>
    <button class="item"><a class="link" href="#">3</a></button>
    <button class="item"><a class="link" href="#">4</a></button>
    <button class="item"><a class="link" href="#">5</a></button>
    <button class="item"><a class="link" href="#">6</a></button>
    <button class="item"><a class="link" href="#">7</a></button>
    <button class="item"><a class="link" href="#">8</a></button>
    <button class="item"><a class="link" href="#">9</a></button>
  </Flex>

        <MomentsList/>

      <Image src='https://www.kindmeal.my/images/banner_recipe.jpg'/>

        <MomentsList/>

      <Flex justifyContent={"space-between"} width={"30%"} color={'blue'} margin='15px 0px'>
    <Text pt='15px' color='grey'>Page:  </Text>
    <button class="item"><a class="link" href="#">1</a></button>
    <button class="item"><a class="link" href="#">2</a></button>
    <button class="item"><a class="link" href="#">3</a></button>
    <button class="item"><a class="link" href="#">4</a></button>
    <button class="item"><a class="link" href="#">5</a></button>
    <button class="item"><a class="link" href="#">6</a></button>
    <button class="item"><a class="link" href="#">7</a></button>
    <button class="item"><a class="link" href="#">8</a></button>
    <button class="item"><a class="link" href="#">9</a></button>
  </Flex>
    </Box>
    </div>
  );
  
  export default KindMealsHome;
