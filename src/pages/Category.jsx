import { Flex, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { data } from "../constant";
import PlaceCard from "../components/PlaceCard";


const Category=()=>{

    const {categoryId}=useParams();
    const dbData= data.continents.find(({id})=>id===+categoryId)
    return (
        <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2} >
            <Text>Top Countries for your next holiday</Text>
            <Flex>
              {dbData.countries.map((item)=>(<PlaceCard place={item} key={item.id} isCountries />))}
            </Flex>
        </Flex>
    )
}

export default Category;