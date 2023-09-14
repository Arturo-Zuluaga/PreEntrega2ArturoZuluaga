
import { Divider, Stack, Card, CardBody, Image, Heading, CardFooter, ButtonGroup, Button, Text, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

    <Card maxW='xs' margin="20px" height="50%" width="100%" backgroundColor='rgba(219, 252, 253, 0.946)'>
      <CardBody
        backgroundColor="" borderRadius="5px" >
        <Image
          src={producto.imageUrl}
          alt='imagen del producto'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' >
            <Link to={"/item/" + producto.id}>
              Ir al detalles </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

  )
}
export default Item