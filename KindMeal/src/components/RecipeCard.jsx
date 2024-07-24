
import { Box, Image, Text, Button } from '@chakra-ui/react';


const RecipeCard = ({ recipe }) => {
  return (
    <Box borderWidth="1px" borderRadius="10px" overflow="hidden" width="250px">
      <Image src={recipe.image} alt={recipe.name} boxSize="270px"  objectFit="cover" />
      
      <Box p="6">
        <Box display="flex" alignItems="baseline">
        </Box>
        <Box mt="1px" fontWeight="semibold" as="h4" lineHeight="tight">
          {recipe.name}
        </Box>
        <Box>
         Time:{recipe.time}
         
        </Box>
        <Button mt="2px"  backgroundColor="red" color="white" size="sm">
          View
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeCard;