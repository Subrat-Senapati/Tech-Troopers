import React from "react";
import { Stack, Card, Image, CardBody, CardFooter, Button, Flex, } from "@chakra-ui/react";

function MealHead() {
    return (
        <Card       
           
            variant='outline'
            style={{
                marginTop: "3rem", height: "17rem",
                width: "70rem",
                display:"flex",
                justifyContent:"center",
                marginLeft:"15rem"
                
            }}
        >
            <Image
            
                objectFit='cover'
                src='https://www.kindmeal.my/images/banner_directory.jpg'
                alt='Caffe Latte'

            />

            
        </Card>
    )
}

export default MealHead