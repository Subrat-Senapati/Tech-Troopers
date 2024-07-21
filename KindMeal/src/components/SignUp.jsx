import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import SignupPopup from './SignupPopup';

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openPopup} variant='ghost'>Sign Up</Button>
      <SignupPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
}

export default SignUp;