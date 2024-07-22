import React from 'react';
import { Box, Container, Image, Flex, Button, ButtonGroup, Spacer, Input, Select, Text, Card} from '@chakra-ui/react';
import MomentsList from './MomentsList';

const mockMoments = [
    {
      id: 1,
      image: 'https://www.kindmeal.my/photos/moment/26/26830-55541-m.jpg',
      title: 'Delicious Meal',
      description: '🥗CILANTRO DRESSING🥗 Back to having a giant salad for Sunday .. see more'
    },
  
    {
      id: 2,
      image: 'https://www.kindmeal.my/photos/moment/26/26818-55500-m.jpg',
      title: 'Delicious Meal',
      description: 'A wonderful vegan meal I had today!'
    },
  
    {
      id: 3,
      image: 'https://www.kindmeal.my/photos/moment/26/26817-55494-m.jpg',
      title: 'Delicious Meal',
      description: 'A wonderful vegan meal I had today!'
    },
  
    {
      id: 4,
      image: 'https://www.kindmeal.my/photos/moment/26/26825-55530-m.jpg',
      title: 'Delicious Meal',
      description: 'A wonderful vegan meal I had today!'
    },
  
    { 
      id: 5,
      image: 'https://www.kindmeal.my/photos/moment/26/26811-55469-m.jpg',
      title: 'Delicious Meal',
      description: 'A wonderful vegan meal I had today!'
    },
  
    {  
      id: 6,
      image: 'https://www.kindmeal.my/photos/moment/26/26823-55523-m.jpg',
      title: 'Delicious Meal',
      description: 'A wonderful vegan meal I had today!'
    },
    // Add more mock moments here
  ];

  const KindMealsHome = () => (
    <div>
      <Box >
      <Flex bg='lightgrey'>
      <Box bg='lightgrey' w='100%'>
        
  <Text fontSize='2xl'>KindMoments   |   Saving Lives with Yummy Photos</Text>
  <Text>Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.
  
  </Text><Text>Download our mobile app to easily showcase your masterpieces and interact with food lovers.
  
  </Text><Text>Get started sharing your tasty moments now.
  </Text>
  
      </Box>
      <Card bg='white' height='100px' textAlign='center'>
        <Text fontSize='xl'>Share Your KindMoment</Text>
        <Text>Interesting food or restaurant? Share with 1000s of food lovers!</Text>
        <Button colorScheme='red'>Share</Button>
      </Card>
      </Flex>
      <Flex margin='10px 50px'minWidth='max-content' alignItems='center' gap='2'>
      <ButtonGroup gap='2'>
        <Button colorScheme='green'> Moments</Button>
        <Button>Deal Reviews</Button>
        <Button>Following</Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup gap='2'>
        <Input width='350px' placeholder='Search User or Shop'/>
        <Select placeholder='All locations'></Select>
        <Button colorScheme='red'>Search</Button>
      </ButtonGroup>
  </Flex>
  <Flex justifyContent={"space-between"} width={"30%"} color={'blue'}>
    <h6 margintop="4px" color='black'>Pages:  </h6>
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
      <Container maxW="container.xl" mt={4}>
        <MomentsList moments={mockMoments} />
      </Container>
      <Image src='https://www.kindmeal.my/images/banner_recipe.jpg'/>
      <Container maxW="container.xl" mt={4}>
        <MomentsList moments={mockMoments} />
      </Container>
      <Flex justifyContent={"space-between"} width={"30%"} color={'blue'}>
    <h6 margintop="4px" color='black'>Pages:  </h6>
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
    </Box>
    </div>
  );
  
  export default KindMealsHome;
  
