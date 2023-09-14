import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Input, InputGroup, InputRightElement, Text, Wrap, WrapItem, useDisclosure, useToast } from "@chakra-ui/react"
import { useState } from "react"
import "../style.css"
import { AiFillShopping, AiOutlineArrowLeft, AiOutlineEdit, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMore, AiOutlineUser } from "react-icons/ai";
import { BsBoxArrowInLeft } from "react-icons/bs";

function SizeExample(props) {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['2xl']

    const [show, setShow] = useState(false)
    const HandleClick = () => setShow(!show)

    // let [Nawload, setNawload] = useState(true)

    // let [Bor, setBor] = useState(true)

    // let [Gmail, setGmail] = useState("")
    // function Gmail_reg() {
    //   if (Gmail == "") {
    //     setProver(true)
    //     setBor(false)
    //     setTimeout(() => {
    //       setBor(true)
    //     }, 3000);
    //   }
    //   else{
    //     setProver(false)
    //   }
    // }

    let [Menu, setMenu] = useState(true)

    // let [Prover, setProver] = useState(true)

    let [Newregis, setNewregis] = useState(true)  

    let [SigiN, setSigiN] = useState(true) 

    let [Login, setLogin] = useState("")
    let [Poswor, setPoswor] = useState("")
    let [bordeR, setbordeR] = useState(true)
    function Sigin() {
      if (Login == "" || Poswor == "") {
        setbordeR(false)
        setTimeout(() => {
          setbordeR(true)
        }, 2000);
      }
      else{
        setSigiN(false)
        setNewregis(true)
      }
    }

    let [Minibr, setMinibr] = useState(true) 

    let [Name_del, setName_del] = useState(true)  
    let [InputName, setInputName] = useState(Login) 
    function handelName() {
      if (InputName == '') {
        setName_del(false)
      }
      else{
        setName_del(true)
      }
      setLogin(InputName)
    }

    const [BtnR, setBtnR] = useState(false)
    const handlePosw = () => setBtnR(!BtnR)
  

    return (
      <>
        {sizes.map((size) => (
          <Button onClick={() => handleClick(size)} variant={"solid"} p={{base:"0 8px", xl:"0 16px"}} h={"60px"} minW={'70px'} maxW={'80px'} display={"flex"} alignItems={"center"} flexDirection={"column"}>
              <AiOutlineUser fontSize={"26px"} color="rgba(90,10,200,0.600)" />
              <Text fontSize={"14px"} display={{lg:"none", xl:"block"}} color="rgba(90,10,200,0.600)">{props.title}</Text>
          </Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton position={'absolute'} right={'40px'} zIndex={10}/>
            <DrawerBody>

            <Box display={Menu ? "block" : "none"}>
              <Text fontSize={{base:"18px", sm:"2xl", xl:"3xl"}} fontWeight={"bold"} color={"#4E4B66"} textAlign={"center"} mt={"55px"}>Вход или регистрация</Text>
              <Box mt={"90px"} position={"relative"}>
                <Box display={'flex'} justifyContent={'center'}>
                  <Input h={"46px"} maxW={'700px'} placeholder="Адрес эл. почты"></Input>
                </Box>

                <Box display={'flex'} justifyContent={'center'}>
                  <InputGroup maxW={'700px'} mt={"35px"}>
                    <Input
                      pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Пароль'/>
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={HandleClick}>
                        {show ? <AiOutlineEyeInvisible size={'20px'}/> : <AiOutlineEye size={'20px'}/>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>

                {/* <Text onClick={() => {setNawload(false); setMenu(false)}} fontSize={"14px"} fontWeight={"medium"} color={"#A0A3BC"} position={"absolute"} mt={"10px"} right={"0"} cursor={"pointer"}>Забыли пароль</Text> */}
              </Box>

              <Button className="btn__Wel" color={"white"} w={'220px'} leftIcon={<AiFillShopping/>} variant="unstyled" p={'5px 65px'} borderRadius={"15px"} m={"70px auto 0"} transition={'all 0.3s ease'} display={"block"} bg={"#F56E1E"}>Войти</Button>
              
              <Button className="btn__Wel" onClick={() => {setNewregis(false); setMenu(false)}} w={'220px'} color={"#6E7191"} borderRadius={"15px"} variant={"outline"} fontSize={{base:"14px", md:"16"}} m={"20px auto 0"} display={"block"} fontWeight={"bold"}>Зарегистрироваться</Button>
            </Box>

            <Box display={Newregis ? "none" : "block"}>

              <Button onClick={() => {setNewregis(true); setMenu(true)}} position={"absolute"} variant={"ghost"} left={"5px"} top={"5px"}><AiOutlineArrowLeft/></Button>

              <Text fontSize={"3xl"} fontWeight={"bold"} color={"#4E4B66"} textAlign={"center"} mt={"45px"}>Зарегистрироваться</Text>
              <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Input h={"46px"} maxW={'700px'} mt={"40px"}  border={bordeR ? "1.6px solid rgb(196, 196, 196)" : "1.6px solid red"} placeholder="Адрес эл. почты"></Input>
                <Input h={"46px"} maxW={'700px'} mt={"40px"} border={bordeR ? "1.6px solid rgb(196, 196, 196)" : "1.6px solid red"} value={Login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин"></Input>
                <InputGroup h={"46px"} maxW={'700px'} mt={"40px"} >
                  <Input h={"100%"} w={'100%'} type={BtnR ? 'text' : 'password'} border={bordeR ? "1.6px solid rgb(196, 196, 196)" : "1.6px solid red"} value={Poswor} onChange={(e) => setPoswor(e.target.value)} placeholder="Пароль"/>
                  <InputRightElement h={'100%'} width='4.5rem'><Button h='70%' size='sm' onClick={handlePosw}> {BtnR ? <AiOutlineEyeInvisible size={'20px'}/> : <AiOutlineEye size={'20px'}/>} </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Button className="btn__Wel" onClick={() => Sigin()} color={"white"} variant="unstyled" p={'5px 65px'} borderRadius={"15px"} m={"40px auto 0"} display={"block"} bg={"#F56E1E"}>Создать</Button>

            </Box>

            <Box display={SigiN ? "none" : "block"} position={'relative'}>

              <Button onClick={() => Minibr ? setMinibr(false) : setMinibr(true)} transition={'all 0.3s ease'} position={"absolute"} variant={"outline"} color={'rgb(240, 100, 105)'} left={Minibr ? '0' : "10px"} top={"0"}><AiOutlineMore fontSize={"25px"}/></Button>

              <Box w={'80px'} h={Minibr ? '0' : '80px'} bg={'rgba(225, 237, 251, 0.600)'} display={'flex'} alignItems={'center'} flexDirection={'column'} overflow={'hidden'} transition={'all 0.5s 0.2s ease'} borderRadius={'5px'} backdropFilter={'blur(10px)'} position={'absolute'} top={'45px'}>
                <Button onClick={() => [setName_del(false), setMinibr(true)]} variant={'outline'} h={'40px'} w={'100%'} p={0}>
                  <AiOutlineEdit size={'20px'}/>
                  <Text fontSize={'15px'}>Name</Text>
                </Button>
                <Button onClick={() => [setSigiN(true), setMenu(true), setPoswor(''), setLogin(''), setMinibr(true)]} p={0} variant={"outline"} w={'100%'} color={'rgb(240, 100, 105)'}>
                  <BsBoxArrowInLeft fontSize={"20px"}/>
                  <Text fontSize={'15px'} color={'rgb(240, 100, 105)'}>Quit</Text>
                </Button>
              </Box>

              <Box h={'auto'} maxH={'300px'} display={'flex'} justifyContent={'center'}>
                <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" className="Icon__user" alt="" />
              </Box>

              <Box className="User__Name" display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0 20px'}>
                <Text fontSize={'18px'} display={Name_del ? "inline-block" : "none"}>{Login}</Text>
                <Input placeholder="Name" onChange={(e) => setInputName(e.target.value)} h={'100%'} display={Name_del ? "none" : "inline-block"}></Input>

                <Button onClick={() => handelName()} h={'35px'} variant={'outline'} display={Name_del ? "none" : "inline-block"}>OK</Button>
                  
              </Box>

              <Box w={"100%"} h={"55vh"} bg={'rgb(225, 237, 251)'} display={"flex"} justifyContent={"center"} p={"5px"}>
                <p>здесь поко нечего нет</p>
              </Box>

            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default SizeExample
