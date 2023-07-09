import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { data } from '../constant';
import { useParams } from 'react-router-dom';
import { getData } from '../utils';

const Details = () => {

    const {destinationId}=useParams()
  const continent=getData(data.continents,destinationId);
  const country=getData(continent?.countries,destinationId);
  const placeDetails=country.destinations.find((item)=>item.id===+destinationId)
 
  return (
    <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
     
     <Heading>{placeDetails.name}</Heading>
     <Flex>
      <Flex w='500px' >
      <Image  src={placeDetails.image} />
      </Flex>
      
      <Flex flexDir='column' m={2} >
      <Text> Description: {placeDetails.description}  </Text>
      <Text> Ratings: {placeDetails.ratings}  </Text>
      <Text> Reviews: {placeDetails.reviews}  </Text>
      <Text> Location: {placeDetails.location}  </Text>
      <Text> Opening Hours: {placeDetails.openingHours}  </Text>
      <Text> Ticket Price: {placeDetails.ticketPrice}  </Text>

      </Flex>
     </Flex>
    </Flex>
  );
};

export default Details;