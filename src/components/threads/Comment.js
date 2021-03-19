import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
export default function Comment({ content }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const { data: userResponse } = useFetch('https://randomuser.me/api');
  const user = userResponse ? userResponse.results[0] : null;

  useEffect(() => {
    const random = Math.floor(Math.random() * 50);
    setLikes(random);
  }, []);
  return (
    <Box p="5" borderBottom="1px solid silver" w="100%">
      <HStack>
        <Box mr="10">
          <Image src={user && user.picture.medium} rounded="full" />
          <Text>Anon</Text>
        </Box>
        <VStack align="start" spacing="5" flex="1">
          <Text>{content.replace('\n', '</br>')}</Text>
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
