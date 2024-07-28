import { LinkOverlay, SimpleGrid } from '@chakra-ui/react';
import RecipeCard from './RecipeCard';

const recipes = [
  {
    name: 'Finnish Summer Vegetable Soup',
    image: 'https://www.kindmeal.my/photos/recipe/111/111311-17032-m.jpg',
    time: '30 Mins',
    
  },
  {
    name: 'Vegetarian VFC',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg',
    time: '1 Hr',
  
  },
  {
    name: 'Southern Macaroni and Cheese',
    image: 'https://www.kindmeal.my/photos/recipe/102/102405-15010-m.jpg',
    time: '1 Hr 30 mins',
    
  },
  {
    name: 'Hot Caramel Jam Recipe',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039449-58866-m.jpg',
    time: '1 Hr',
    
  },
  {
    name: 'Chocolate Brownie Tart',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039475-58908-m.jpg',
    time: '20 mins',
    
  },
  {
    name: 'Maggi Peanuts Salad',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg',
    time: '30 mins',
    
  },
  
  {
    name: 'Coconut Banana Smoothie',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg',
    time: '10 mins',
    
  },
  {
    name: 'Donuts',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039478-58911-m.jpg',
    time: '55 mins',
   
  },
  {
    name: 'Pitaya Adzuki Nice Cream Smoothie Bowl',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg',
    time: '45 mins',
    
  },
  {
    name: 'The Rock',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000006-19412-m.jpg',
    time: '1 Hr',
    
  },
  {
    name: 'Making French Toast-easy',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039462-58891-m.jpg',
    time: '25 mins',
   
  },
  {
    name: 'Ceasar Dressing',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000012-19420-m.jpg',
    time: '30 mins'
    
  },
  
];

const RecipeList = () => {
  return (
    <SimpleGrid columns={[ 1, 2, 3]} spacing="80px">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;