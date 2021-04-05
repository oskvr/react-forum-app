import { Box } from '@chakra-ui/layout';
import React from 'react';

// Unused atm
export default function LetterIcon({ text, size }) {
  const letter = text ? text.substring(0, 1).toUpperCase() : '';
  const sizes =
    {
      sm: '8',
      md: '12',
      lg: '16',
    }[size] ?? '12';
  const bgColor =
    {
      A: 'red.500',
      B: 'red.600',
      C: 'yellow.500',
      D: 'yellow.600',
      E: 'orange.500',
      F: 'orange.600',
      G: 'green.500',
      H: 'green.600',
      I: 'teal.500',
      J: 'teal.600',
      K: 'blue.500',
      L: 'blue.600',
      M: 'cyan.500',
      N: 'cyan.600',
      O: 'pink.500',
      P: 'pink.600',
      Q: 'purple.500',
      R: 'purple.600',
      S: 'green.600',
      T: 'blue.700',
      U: 'red.700',
      V: 'pink.700',
      W: 'green.700',
      X: 'blue.700',
      Y: 'cyan.700',
      Z: 'purple.700',
      Å: 'teal.700',
      Ä: 'orange.700',
      Ö: 'black',
    }[letter] ?? 'gray.700';
  return (
    <div>
      <Box
        d="grid"
        placeItems="center"
        rounded="full"
        bg={bgColor}
        h={sizes}
        w={sizes}
        color="white"
        fontSize="xl"
      >
        {text ? letter : '?'}
      </Box>
    </div>
  );
}
