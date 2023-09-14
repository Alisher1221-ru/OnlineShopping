import { Box, Button, Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import Logo from "../img/logo.png"
import { HamburgerIcon, CloseIcon, PhoneIcon, Search2Icon, ArrowForwardIcon } from '@chakra-ui/icons'
import SizeExample from "../Cart/Registr";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineAppstore } from "react-icons/ai";

export default function Header() {
    let [ Ktmenu, setKtmenu ] = useState(true)
    let [ Cc, setCc ] = useState([])

    let [ScrolL, setScrolL] = useState(true)
    useEffect(() => {
        let handelScroll = () => {
            if (window.scrollY > 210) {
                setScrolL(true)
            }
            else{
                setScrolL(true)
            }
            setKtmenu(true)
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])


    let [Like, setLike] = useState(true);
    let [Shop, setShop] = useState(true);
    let [Glob, setGlob] = useState(true);

    // let Time = new Date().toLocaleTimeString()

    let [leng__Kt, setleng__Kt] = useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    return(
        <Box h={{base:"90px",lg:"100px"}} w={"100%"}>
        <Flex flexDirection={"column"} borderBottom={"1px solid gray"} className={ScrolL ? 'noscrolling' : 'scrolling'} transition={"all 0.4s ease"} zIndex={"10"} bg={"gray.100"} alignItems={"center"} justifyContent={"center"} h={{base:"90px",lg:"100px"}} w={"100%"} p={{base:"10px 15px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}}>
            <Box w={"100%"} justifyContent={{base:"space-between",lg:"start"}} alignItems={"center"} display={"flex"}>
            <Button onClick={onOpen} display={{base:"flex", lg:"none"}}>
                <HamburgerIcon  fontSize={{base:"26px", sm:"30px", md:"38px"}} color={"rgb(89,49,244)"}/>
            </Button>
            <Drawer  placement={placement} size={'full'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <DrawerHeader color={"rgb(89,49,244)"} borderBottomWidth='1px'>Menu</DrawerHeader>
                        <Button display={'inline-block'} onClick={onClose} m={'0 20px 0 0'}>
                            <CloseIcon fontSize={"17px"} color={"rgb(89,49,244)"}/>
                        </Button>
                    </Box>
                <DrawerBody>
                    <NavLink to="/" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}, isActive ? setGlob(false) : setGlob(true)}}>
                        <Button onClick={onClose} variant={"solid"} borderLeft={Glob ? '' : '2px solid green'} h={"50px"} w={"100%"} p={"2px 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"} mb={'20px'}>
                            <AiOutlineAppstore fontSize={"26px"} color={Glob ? 'gray' : 'green'}/>
                            <Text fontSize={"14px"} color={Glob ? 'gray.600' : 'green'}>общие</Text>
                        </Button>
                    </NavLink>
                    
                    <NavLink to="/Like" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}, isActive ? setLike(false) : setLike(true)}}>
                        <Button onClick={onClose} variant={"solid"} borderLeft={Like ? '' : '2px solid red'} h={"50px"} w={"100%"} p={"2px 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"} mb={'20px'}>
                            <AiOutlineHeart fontSize={"26px"} color={Like ? 'gray' : 'red'}/>
                            <Text fontSize={"14px"} color={Like ? 'gray.600' : 'red'}>Избранное</Text>
                        </Button>
                    </NavLink>

                    <NavLink to="/shop" style={({ isActive, isPending }) => {return { borderRadius: isActive ? '5px' : "5px"}, isActive ? setShop(false) : setShop(true)}}>
                        <Button onClick={onClose} variant={"solid"} borderLeft={Shop ? '' : '2px solid rgba(30, 96, 218, 0.700)'} h={"50px"} w={"100%"} p={"2px 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                            <AiOutlineShoppingCart fontSize={"26px"} color={Shop ? "gray" : "rgba(30, 96, 218, 0.700)"}/>
                            <Text fontSize={"14px"} color={Shop ? "gray.600" : "blue.500"}>Корзина</Text>
                        </Button>
                    </NavLink>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Link to={"/"}>
                <Box >
                    <img className="Logo" src={Logo} alt="" />
                </Box>
            </Link>
            <Box display={{base:"flex", lg:"none"}} alignItems={"center"} justifyContent={"center"} h={"40px"} w={"40px"}>
                <Search2Icon fontSize={{base:"22px", sm:"26px", md:"32px"}} color={"rgb(89,49,244)"}/>
            </Box>
            <Box onClick={() => {{Ktmenu ? setKtmenu(false) : setKtmenu(true); Ktmenu ? setleng__Kt(false) : setleng__Kt(true)}}} cursor={"pointer"} h={"45px"} w={{base:"50px","2xl":"150px"}} m={"0 0 0 40px"} display={{base:"none",lg:"flex"}} alignItems={'center'} borderRadius={"15px"} justifyContent={'center'} bg={"rgb(89,49,244)"}>
                <HamburgerIcon className={Ktmenu ? "Burgerr" : ""} display={Ktmenu ? "flex" : "none"} color={"white"} boxSize={"40px"} p={"0 5px"}/>
                <CloseIcon className={Ktmenu ? "" : "Burgerr"} display={Ktmenu ? "none" : "flex"} color={"white"} boxSize={"40px"} p={"0 10px"} />
                <Text display={{base:"none","2xl":"flex"}} p={"0 0 0 10px"} fontSize={"18px"} lineHeight={"28px"} fontWeight={"600"} color={"white"}>Каталог</Text>
            </Box>
            <Box ml={{base:"10px",xl:"60px"}} border={"1.5px solid rgb(89,49,244)"} overflow={"hidden"} display={{base:"none",lg:"flex"}} borderRadius={"10px"} w={"50%"} h={"50px"} bg={"rgba(52, 104, 235, 0.150)"}>
                <Input className="InputSearch" h={"100%"} w={"90%"} p={"0 0 0 10px"} fontSize={"18px"} variant='unstyled' color={'rgb(65, 41, 163)'} placeholder='Я ищу'/>
                <Button variant={'ghost'} h={"100%"} w={"10%"}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"} w={"10%"}>
                        <Search2Icon fontSize={"25px"} color={"rgb(89,49,244)"}/>
                    </Box>
                </Button>
            </Box>
            <Flex display={{base:"none",lg:"flex"}} alignItems={'center'} ml={"30px"} justifyContent={"space-between"} w={"25%"}>
                <NavLink to="/shop" style={({ isActive, isPending }) => {return { borderRadius: isActive ? '5px' : "5px"}, isActive ? setShop(false) : setShop(true)}}>
                    <Button variant={"solid"} borderBottom={Shop ? '' : '2px solid rgba(30, 96, 218, 0.700)'} h={"60px"} minW={'70px'} maxW={'80px'} p={"0 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineShoppingCart fontSize={"26px"} color={Shop ? "rgba(90,10,200,0.600)" : "rgba(30, 96, 218, 0.900)"}/>
                        <Text fontSize={"14px"}  display={{lg:"none", xl:"block"}} color={Shop ? "rgba(90,10,200,0.600)" : "blue.500"}>корзина</Text>
                    </Button>
                </NavLink>

                <NavLink to="/Like" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}, isActive ? setLike(false) : setLike(true)}}>
                    <Button variant={"solid"} borderBottom={Like ? '' : '2px solid red'} h={"60px"} minW={'70px'} maxW={'80px'} p={"0 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineHeart fontSize={"26px"} color={Like ? 'rgba(90,10,200,0.600)' : 'red'}/>
                        <Text fontSize={"14px"}  display={{lg:"none", xl:"block"}} color={Like ? 'rgba(90,10,200,0.600)' : 'red'}>нравиться</Text>
                    </Button>
                </NavLink>
                <SizeExample img="https://cdn.icon-icons.com/icons2/2442/PNG/512/profile_user_icon_148618.png" title="профиль"/>
            </Flex>
            </Box>

            <Box display={"flex"} p={Ktmenu ? "0" : {base:"10px 15px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} justifyContent={"space-between"} alignItems={"center"} h={Ktmenu ? "0px" : "92vh"} className="Ktmenu" transition={"all 0.3s 0.1s ease"} w={"100%"} position={"fixed"} top={{base:"90px", lg:"100px"}} zIndex={10}>
            </Box>
            
        </Flex>
        </Box>
    )
}
