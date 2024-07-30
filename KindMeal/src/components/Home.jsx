import { Box, Input, Button, Heading, Flex, Select, SimpleGrid, Spacer, HStack, Text} from '@chakra-ui/react';
import RecipeList from './RecipeList';

const Home = () => {
  return (
    
    <Box  ml={"150px"} mr={"150px"}  >
        <Box backgroundColor={'#ececec'} borderRadius={"5px"} ml={"-200px"} mr={"-200px"} pt={"10px"}>
        <div style={{ width: "60rem" }}>
        <Text fontSize={"1.9rem"} ml={"200px"} color={"black"}>
            <b>Food & Drinks  </b>| Yummy Meat-Free Recipes
          </Text>
          </div>
        <div alignItems="center" >
        <Text ml="200px">Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</Text>
        
        <Text ml="200px">Transform into a master chef now.</Text>
        </div>
        
          <HStack>
          
          <Input placeholder="Search Recipe or User Name" width="300px" height="40px" mr="10px" ml="200px" backgroundColor={'white'} border={"1px solid grey"} />
          <Select placeholder="All Categories" width="200px" height="40px" mr="10px" backgroundColor={'white'} border={"1px solid grey"}>
            <option value="Appetizers">Appetizers</option>
            <option value="Beverages">Beverages</option>
            <option value="Breakfasts">Breakfasts</option>
            <option value="Breads">Breads</option>
            <option value="Condiments">Condiments</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Salads">Salads</option>
            <option value="Side Dishes">Side Dishes</option>
            
          </Select>
          <Button className='red-btn' backgroundColor="#f53838" color="white"  >Search Recipes</Button>

          <Spacer/>
          <Button className='green-btn' backgroundColor="#2bb673" color="white" mr='230px'>Share My Recipe</Button>
          </HStack>
          <br></br>
          
          </Box>

      
      <br>
      </br>
      
      <br></br>
      <div mb="50px">
        <SimpleGrid columns={[2,4,6]} spacing="7px">

      <Button className='green-btn' backgroundColor="#2bb673" color="white" marginLeft={"5px"} marginRight={"2px"} width={"170px"}>All Categories</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"} border={'1px solid lightgrey'} width={"170px"}>Appetizers</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Beverages</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Breakfast</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Breads</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Condiments</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Desserts</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Snacks</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Main Dishes</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Salads</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Side Dishes</Button>
          <Button backgroundColor="#ececec" color="grey" marginLeft={"2px"} marginRight={"2px"}  border={'1px solid lightgrey'} width={"170px"}>Soups</Button>

        </SimpleGrid>
          </div>
          
          <br></br>
          <Flex justifyContent={"space-between"} width={"30%"} color={'blue'}>
          <Text pt='15px' color='grey'>Page:  </Text>
                    <button className="item"><a className="link" href="#"  >1</a></button>
                    <button className="item"><a className="link" href="#" >2</a></button>
                    <button className="item"><a className="link" href="#">3</a></button>
                    <button className="item"><a className="link" href="#">4</a></button>
                    <button className="item"><a className="link" href="#">5</a></button>
                    <button className="item"><a className="link" href="#">6</a></button>
                    <button className="item"><a className="link" href="#">7</a></button>
                    <button className="item"><a className="link" href="#">8</a></button>
                    <button className="item"><a className="link" href="#">9</a></button>
          </Flex>
          <br></br>
      
      <RecipeList />
      
      
      <Flex justifyContent={"space-between"} width={"30%"} color={'blue'}>
                 
      <Text pt='15px' color='grey'>Page:  </Text>
                    
                    <button className="item"><a className="link" href="#">1</a></button>
                    <button className="item"><a className="link" href="#">2</a></button>
                    <button className="item"><a className="link" href="#">3</a></button>
                    <button className="item"><a className="link" href="#">4</a></button>
                    <button className="item"><a className="link" href="#">5</a></button>
                    <button className="item"><a className="link" href="#">6</a></button>
                    <button className="item"><a className="link" href="#">7</a></button>
                    <button className="item"><a className="link" href="#">8</a></button>
                    <button className="item"><a className="link" href="#">9</a></button>
                    
                    
                
            
            </Flex>
    </Box>
    
  );
};

export default Home;