import { Button } from '@chakra-ui/button';
import { Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function UpvoteButton({ handleClick, likeCount, ...props }) {
  return (
    <VStack {...props} flexShrink="0" spacing="1" alignSelf="start">
      <Button
        variant="ghost"
        _focus={{ boxShadow: 'none' }}
        onClick={handleClick}
      >
        <FaChevronUp />
      </Button>
      <Text as="span">{likeCount}</Text>
    </VStack>
  );
}
