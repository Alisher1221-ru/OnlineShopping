import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Grid, GridItem, Heading, Image, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, Wrap, WrapItem, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CloseIcon } from '@chakra-ui/icons'
import axios from "axios";
import { BsFillHeartFill, BsBagDash } from "react-icons/bs";

export default function Block__Cart(data) {

    let [Like, setLike] = useState(true)

    let [MiniCr, setMiniCr] = useState(true)
    let [Name, setName] = useState("")
    let [Img, setImg] = useState("")
    let [Id, setId] = useState(0)
    let [Som, setSom] = useState(0)
    let [Num, setNum] = useState(0)
    let [Ind, setInd] = useState(1)

    function Mns() {
        if (Ind >= 10) {
            setInd(Ind)
        }
        else {
            setInd(Ind + 1)
            setSom(Num * (Ind + 1))
        }
    }
    function Pls() {
        if (Ind <= 1) {
            setInd(Ind)
        }
        else {
            setInd(Ind - 1)
            setSom(Num * (Ind - 1))
        }
    }

    let [Not, setNot] = useState(true);

    useEffect(() => {
        if (data.data.length == 0) {
            setNot(true);
        } else {
            setNot(false);
        }
    });

    console.log(Num);

    const toast = useToast()
    const statuses = ['success']
    return (
            <Grid mt={"20px"} templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(3, 2fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(6, 3fr)' }} gap={{ base: 2, md: 5 }}>
                {
                    Not ? <><Box padding='6' boxShadow='lg' bg='white'><Skeleton><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='6' noOfLines={7} spacing='4' skeletonHeight='2' /></Box> <Box padding='6' boxShadow='lg' bg='white'><Skeleton><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='6' noOfLines={7} spacing='4' skeletonHeight='2' /></Box> <Box padding='6' boxShadow='lg' bg='white'><Skeleton><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='6' noOfLines={7} spacing='4' skeletonHeight='2' /></Box></> :
                        data.data.slice(0, 100).map((item, index) => (
                            <Card minH={'290px'} cursor={'pointer'} className="Cart__Mn" key={index} maxW='sm'>
                                <CardBody p={{ base: "5px 10px", lg: "10px 20px", xl: '15px 10px' }}>
                                    <Image onClick={() => [setMiniCr(false), setImg(item.img), setId(item.id), setName(item.name), setSom(item.price), setNum(item.price)]} w={"100%"} h={'70%'} objectFit={"cover"} src={item.img} alt='Green double couch with wooden legs' borderRadius='lg' className="block_Cart" />
                                    <Button onClick={() => Like ? setLike(false) : setLike(true)} variant={"unstyled"} p={{ base: "0", lg: "10px" }} backdropFilter={'blur(2px)'} bg={"rgba(100, 100, 100, 0.100)"} border={"0.5px solid rgba(190, 190, 190, 0.200)"} position={"absolute"} display={'flex'} alignItems={'center'} justifyContent={'center'} right={"5px"} top={"5px"}>
                                        <BsFillHeartFill fontSize={{ base: "10px" }} color={Like ? "rgb(100, 100, 100)" : "red"} />
                                    </Button>
                                    <Stack mt='2'>
                                        <Text fontSize={{ base: "14px", md: "15px" }} height={{ base: "60px", md: "73px" }} overflow={'hidden'} textOverflow={'ellipsis'}>Beatae nostrum dolores optio blanditiis sequi praesentium deleniti inventore. Ipsam amet assumenda doloribus magni, nisi neque fugiat incidunt soluta.</Text>
                                    </Stack>
                                </CardBody>
                                <Divider m={"0"} />
                                <CardFooter p={{ base: "5px 10px", lg: "10px 20px", xl: '15px 10px' }}>
                                    <ButtonGroup spacing='2' display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                        <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight={"600"}>{item.price} som</Text>
                                        {statuses.map((status, i) => (
                                            <Box key={i}>
                                                <Button variant='solid' colorScheme='blue' onClick={() => toast({ title: `успешно выполнена`, status: status, isClosable: true, })}>
                                                    <BsBagDash />
                                                </Button>
                                            </Box>
                                        ))}
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))
                }
            </Grid>
    )
}
