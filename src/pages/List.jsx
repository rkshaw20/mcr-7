import { Flex, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { data } from "../constant";
import PlaceCard from "../components/PlaceCard";
import { getData} from '../utils'

const List=()=>{

    const {countriesId}=useParams();
    
  const continent=getData(data.continents,countriesId);
  const country=getData(continent?.countries,countriesId);
    return (
        <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2} >
            <Text>Top Countries for your next holiday</Text>
            <Flex>
              {country && country.destinations.map((item)=>(<PlaceCard place={item} key={item.id} isDestination />))}
            </Flex>
        </Flex>
    )
}

export default List;