// src/components/MomentsList.jsx
import { SimpleGrid } from '@chakra-ui/react';
import MomentCard from './MomentCard';

const MomentsList = ({ moments }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
    {moments.map(moment => <MomentCard key={moment.id} moment={moment} />)}
  </SimpleGrid>
);

export default MomentsList;
