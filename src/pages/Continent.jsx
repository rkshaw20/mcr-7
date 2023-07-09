import { Flex, Heading, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { data } from '../constant';
import PlaceCard from '../components/PlaceCard';

const Continent = () => {
  const dbData=data;
  return (
    <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
      <Flex>
        <Heading>Trip Advisor </Heading>
        <ColorModeSwitcher />
      </Flex>
      <Text>Top Continents for your next holiday</Text>
      <Flex>
        {dbData.continents.map((item)=>(<PlaceCard place={item} key={item.id} />))}
      </Flex>
    </Flex>
  );
};

export default Continent;
