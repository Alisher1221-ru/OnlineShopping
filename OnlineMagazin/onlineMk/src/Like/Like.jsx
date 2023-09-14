import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Like() {
    // let { LikeTodo, setCartTodo } = useContext(Context)
    return(
        <Box p={{base:"10px 0px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} position={"relative"} height={"auto"} bg={"gray.100"}>
            <Box minHeight={"350px"}>
                <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"} margin={"300px 0 0"}>тут пока ничего нет</Text>
                {/* {
                    LikeTodo ? <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"} margin={"300px 0 0"}>тут пока ничего нет</Text> :
                    <Box>
                        {
                            LikeTodo.map((el) => {
                                <img src="el.img" alt="" />

                            })
                        }
                    </Box>
                } */}
            </Box>
        </Box>
    )
}
