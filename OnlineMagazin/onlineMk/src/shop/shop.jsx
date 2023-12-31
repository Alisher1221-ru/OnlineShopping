import { Box, Grid, Text } from "@chakra-ui/react";
import Mini__box from "../Cart/Mini__box";

export default function Shop() {
    return(
        <Box p={{base:"10px 0px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} position={"relative"} height={"auto"} bg={"gray.100"}>
            <Box minHeight={"350px"}>
                <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"} margin={"300px 0 0"}>тут пока ничего нет</Text>
            </Box>
            <Box mt={'30px'}>
                <Text fontSize={{base:"20px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight={"bold"} color={"gray.600"}>Популярные категории</Text>
                <Grid mt={"20px"} templateColumns={{base:'repeat(3, 3fr)', sm:'repeat(4, 3fr)', md:'repeat(5, 3fr)', lg:'repeat(6, 3fr)',xl:'repeat(7, 3fr)', "2xl":'repeat(9, 3fr)'}} gap={{base:"15px", lg:"10px"}}>
                    <Mini__box title="Xbox" img={"https://api.logobank.uz/media/logos_png/Artel-01.png"}/>
                    <Mini__box title="Asus" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/asus-512.png"}/>
                    <Mini__box title="oppo" img={"https://cdn-icons-png.flaticon.com/512/882/882745.png"}/>
                    <Mini__box title="Iphone" img={"https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png"}/>
                    <Mini__box title="Redmi" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/xiaomi-512.png"}/>
                    <Mini__box title="Samsung" img={"https://cdn-icons-png.flaticon.com/512/5969/5969247.png"}/>
                    <Mini__box title="vivo" img={"https://cdn-icons-png.flaticon.com/512/882/882711.png"}/>
                    <Mini__box title="hp" img={"https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/HP.png"}/>
                    <Mini__box title="NVIDIA" img={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-512.png"}/>
                </Grid>
            </Box>
        </Box>
    )
}
