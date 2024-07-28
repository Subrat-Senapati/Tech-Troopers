// src/components/MomentsList.jsx
import { SimpleGrid} from '@chakra-ui/react';
import MomentCard from './MomentCard';

const moment = [
  {
    id: 1,
    image: 'https://www.kindmeal.my/photos/moment/26/26843-55590-m.jpg',
    user: 'ChewLengLeng',
    avatar: 'https://www.kindmeal.my/photos/member/11/11540-s.jpg',
    date:"Jul 28th 2024",
    description: 'Philea Vege Cafe Add : No.31, Jalan Belia, Off Jalan Raja Laut, 50350 Kuala Lumpur. Tel : 0128772981 / 0124321094 Business Hour : ...see more'
  },

  {
    id: 2,
    image: 'https://www.kindmeal.my/photos/moment/26/26842-55584-m.jpg',
    user: 'SophieLee',
    avatar: 'https://www.kindmeal.my/photos/member/20/20155-s.jpg',
    date:"Jul 28th 2024",
    description: '#槟城新港全新的巴剎 里面其中一个素食档口《素茶馆》订于24/7/2024（星期三观音诞）正式营业。 * 单座 RM 8.. see more'
  },

  {
    id: 3,
    image: 'https://www.kindmeal.my/photos/moment/26/26817-55494-m.jpg',
    user: 'William21',
    avatar: '',
    date:"Jul 28th 2024",
    description: 'A wonderful vegan meal I had today!'
  },

  {
    id: 4,
    image: 'https://www.kindmeal.my/photos/moment/26/26825-55530-m.jpg',
    user: 'Delicious Meal',
    avatar: '',
    date:"Jul 28th 2024",
    description: 'A wonderful vegan meal I had today!'
  },

  { 
    id: 5,
    image: 'https://www.kindmeal.my/photos/moment/26/26811-55469-m.jpg',
    user: 'Delicious Meal',
    avatar: '',
    date:"Jul 28th 2024",
    description: 'A wonderful vegan meal I had today!'
  },

  {  
    id: 6,
    image: 'https://www.kindmeal.my/photos/moment/26/26823-55523-m.jpg',
    user: 'Delicious Meal',
    avatar: '',
    date:"Jul 27th 2024",
    description: 'A wonderful vegan meal I had today!'
  },
];

const MomentsList = () => {
  return(
  <SimpleGrid columns={[ 1,2,3 ]} spacing='40px'>
    {moment.map((moment) => (<MomentCard key={moment.id} moment={moment} />))}
  </SimpleGrid>
  )
};

export default MomentsList;