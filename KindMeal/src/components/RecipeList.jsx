import { LinkOverlay, SimpleGrid } from '@chakra-ui/react';
import RecipeCard from './RecipeCard';

const recipes = [
  {
    name: 'Finnish Summer Vegetable Soup',
    image: 'https://www.kindmeal.my/photos/recipe/111/111311-17032-m.jpg',
    time: '30 Mins',
    avatar: 'https://www.kindmeal.my/photos/member/0/6-s.jpg',
    user: 'KindMealChef',
    like: '3',
    comment: '2', 
  },
  {
    name: 'Vegetarian VFC',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg',
    time: '1 Hr',
    avatar: 'https://www.kindmeal.my/photos/member/14/14169-s.jpg',
    user: 'MayNg',
    like: '5',
    comment: '2',
  },
  {
    name: 'Southern Macaroni and Cheese',
    image: 'https://www.kindmeal.my/photos/recipe/102/102405-15010-m.jpg',
    time: '1 Hr 30 mins',
    avatar: 'https://www.kindmeal.my/photos/member/0/6-s.jpg',
    user: 'KindMealChef',
    like: '6',
    comment: '7',
  },
  {
    name: 'Hot Caramel Jam Recipe',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039449-58866-m.jpg',
    time: '1 Hr',
    avatar: 'https://www.kindmeal.my/photos/member/39/39951-s.jpg',
    user: 'FoodLover398',
    like: '1',
    comment: '2',
    
  },
  {
    name: 'Chocolate Brownie Tart',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039475-58908-m.jpg',
    time: '20 mins',
    avatar: 'https://www.kindmeal.my/images/default_male-s.jpg',
    user: 'MyWeekendPlan',
    like: '7',
    comment: '4',
    
  },
  {
    name: 'Maggi Peanuts Salad',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg',
    time: '30 mins',
    avatar: 'https://www.kindmeal.my/photos/member/11/11401-s.jpg',
    user: 'BluePenguin',
    like: '7',
    comment: '3',
    
  },
  
  {
    name: 'Coconut Banana Smoothie',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg',
    time: '10 mins',
    avatar: 'https://www.kindmeal.my/photos/member/38/38334-s.jpg',
    user: 'shamanth',
    like: '2',
    comment: '1',
  },
  {
    name: 'Donuts',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039478-58911-m.jpg',
    time: '55 mins',
    avatar: 'https://www.kindmeal.my/photos/member/28/28122-s.jpg',
    user: 'MalikTaufiq',
    like: '5',
    comment: '4',
   
  },
  {
    name: 'Pitaya Adzuki Nice Cream Smoothie Bowl',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg',
    time: '45 mins',
    avatar: 'https://www.kindmeal.my/photos/member/13/13040-s.jpg',
    user: 'YukiAuYong',
    like: '7',
    comment: '6',
  },
  {
    name: 'The Rock',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000006-19412-m.jpg',
    time: '1 Hr',
    avatar: 'https://www.kindmeal.my/images/default_male-s.jpg',
    user: 'MyWeekendPlan',
    like: '2',
    comment: '1',
  },
  {
    name: 'Making French Toast-easy',
    image: 'https://www.kindmeal.my/photos/recipe/1039/1039462-58891-m.jpg',
    time: '25 mins',
    avatar: 'https://www.kindmeal.my/images/default_male-s.jpg',
    user: 'MyWeekendPlan',
    like: '2',
    comment: '2',
  },
  {
    name: 'Ceasar Dressing',
    image: 'https://www.kindmeal.my/photos/recipe/1000/1000012-19420-m.jpg',
    time: '30 mins',
    avatar: 'https://www.kindmeal.my/photos/member/11/11401-s.jpg',
    user: 'BluePenguin',
    like: '4',
    comment: '2',
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