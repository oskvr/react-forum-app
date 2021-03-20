import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import useFetch from '../utils/hooks/useFetch';
export default function Comment({ content }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * 50);
    setLikes(random);
  }, []);
  return (
    <Box p="8" borderBottom="1px solid silver" w="100%" bg="white">
      <HStack>
        <Box mr="10">
          <Image src="https://placekitten.com/g/80/80" rounded="full" />
          <Text>coolkatt_123</Text>
        </Box>
        <VStack align="start" spacing="5" flex="1">
          <Text whiteSpace="pre-wrap">{content}</Text>
          <Text as="small">{new Date().toDateString()}</Text>
        </VStack>
        <VStack flexShrink="0" spacing="1">
          {hasLiked ? (
            <Button variant="ghost" color="gray.300">
              <FaChevronUp />
            </Button>
          ) : (
            <Button
              variant="ghost"
              _focus={{ boxShadow: 'none' }}
              onClick={() => {
                setLikes(likes + 1);
                setHasLiked(true);
              }}
            >
              <FaChevronUp />
            </Button>
          )}

          <Text as="span">{likes}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
