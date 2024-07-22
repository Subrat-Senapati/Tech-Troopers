import React from "react";
import { Button } from '@chakra-ui/react';
// import SignupPopup from "./SignupPopup";

function Header(){
    // const [isOpen, setIsOpen] = useState(false);

    // const openPopup = () => setIsOpen(true);
    // const closePopup = () => setIsOpen(false);

    return (
        <>
        <div class="container my-2">
            <img style ={{height:"4.35rem"}} src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
            {/* <Button onClick={openPopup} colorScheme="teal">Sign Up</Button>
            <SignupPopup isOpen={isOpen} onClose={closePopup} /> */}
        </div>
        </>
    );

}

export default Header;