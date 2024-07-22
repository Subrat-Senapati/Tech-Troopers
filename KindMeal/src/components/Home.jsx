
import { Box, Input, Button, Heading, Flex, Select } from '@chakra-ui/react';
import RecipeList from './RecipeList';

const Home = () => {
  return (
    
    <Box p="10"  width={1500}>
        <Box backgroundColor={'lightgrey'} borderRadius={"5px"}>
        <Heading size={300} ml={"10px"}>Food&Drinks | Yummy Meat-Free Recipes</Heading>
        <div alignItems="center">
        <h6 >Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</h6>
        <br></br>
        <h6 >Transform into a master chef now.</h6>
        </div>
        <br></br>


        
          <Flex>
          <Input placeholder="Search Recipe or User Name" width="300px" height={"40px"} mr="80px" ml={"10px"} backgroundColor={'white'} border={"1px solid black"} />
          <Select placeholder="All Categories" width="400px" height={"45px"} mr="60px" backgroundColor={'white'} border={"1px solid black"}>
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
          <Button  backgroundColor="red" color="white" mr="50px" ml={'20px'}>Search Recipes</Button>
          <Button  backgroundColor="green" color="white">Share My Recipe</Button>
          </Flex>
          <br></br>
          
          </Box>

      
      <br>
      </br>
      
      
      <div mb="50px">
      <Button backgroundColor="green" color="white" marginLeft={"5px"} marginRight={"2px"}>All Categories</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"} border={'2px solid black'}>Appetizers</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Beverages</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Breakfast</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Breads</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Condiments</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Desserts</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Snacks</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Main Dishes</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Salads</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Side Dishes</Button>
          <Button backgroundColor="lightgrey" color="black" marginLeft={"2px"} marginRight={"2px"}  border={'2px solid black'}>Soups</Button>

          </div>
          
          <br></br>
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
          <br></br>
      
      <RecipeList />
      
      
      <Flex justifyContent={"space-between"} width={"30%"} color={'blue'}>
                 
                    <h6 margintop="4px" >Pages:</h6>
                    <button class="link" >prev</button>
                    <button class="item"><a class="link" href="#">1</a></button>
                    <button class="item"><a class="link" href="#">2</a></button>
                    <button class="item"><a class="link" href="#">3</a></button>
                    <button class="item"><a class="link" href="#">4</a></button>
                    <button class="item"><a class="link" href="#">5</a></button>
                    <button class="item"><a class="link" href="#">6</a></button>
                    <button class="item"><a class="link" href="#">7</a></button>
                    <button class="item"><a class="link" href="#">8</a></button>
                    <button class="item"><a class="link" href="#">9</a></button>
                    <button class="link">next</button>
                    
                
            
            </Flex>
    </Box>
    
  );
};

export default Home;