import { Box, Card, CardBody, Icon, Image, Link, Text } from "@chakra-ui/react"
import { BiLocationPlus } from 'react-icons/bi';
import { Link as ReachLink } from "react-router-dom";

const PlaceCard=({place, isCountries,isDestination})=>{
    const {id,image, name}=place;
    
    const getPathToShow = () => {
        if (isDestination) {
          return `/destination/${id}`;
        } else if (isCountries) {
          return `/countries/${id}`;
        } else {
          return `/continent/${id}`;
        }
      };
return(
    <Card>
        <Link as={ReachLink} to={ getPathToShow()} >
        <CardBody>
        <Image src={image} alt={name} position='relative' />
        <Box   bottom='' >  <Icon as={BiLocationPlus} /> <Text>{name}</Text> </Box>
      </CardBody>
        </Link>
     
    </Card>
)
}

export default PlaceCard;