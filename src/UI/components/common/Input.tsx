import React from 'react';
import {
  Input as ChakraInput,
  FormControl,
  FormHelperText,
  FormLabel,
  InputProps,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';

interface Props extends InputProps {
  id: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  helperText?: string;
  inputRightElement?: React.ReactNode;
  inputLeftElement?: React.ReactNode;
}

const Input = ({
  label,
  id,
  isInvalid,
  isDisabled,
  isRequired,
  helperText,
  inputRightElement,
  inputLeftElement,
  ...rest
}: Props) => {
  return (
    <FormControl
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {inputLeftElement && (
          <InputLeftElement>{inputLeftElement}</InputLeftElement>
        )}
        <ChakraInput {...rest} id={id} />
        {inputRightElement && (
          <InputRightElement>{inputRightElement}</InputRightElement>
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Input;
