import React from "react";
import { Button, Flex } from '@chakra-ui/react';
import SignUp from "./SignUp";

function Header(){
    // const [isOpen, setIsOpen] = useState(false);

    // const openPopup = () => setIsOpen(true);
    // const closePopup = () => setIsOpen(false);

    return (
        <>
        <Flex>
        <div class="container my-2">
            <img style ={{height:"4.35rem"}} src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
        </div>
        <SignUp/>
        </Flex>
        </>
    );

}

export default Header;