import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import SignupPopup from "./SignupPopup";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="cotainer mx-auto" >
        <Button onClick={openPopup} variant="ghost">
          Sign Up
        </Button>
        <SignupPopup isOpen={isOpen} onClose={closePopup} />
      </div>
    </>
  );
}

export default SignUp;
