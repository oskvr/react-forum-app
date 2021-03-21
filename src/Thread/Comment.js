import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
export default function Comment({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  function getDateString() {
    const commentDate = new Date(comment.createdAt);
    const today = new Date();
    if (commentDate.getDate() === today.getDate()) {
      return `Idag, ${commentDate.toLocaleString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    } else if (commentDate.getDate() === today.getDate() - 1) {
      return `Igår, ${commentDate.toLocaleString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    } else {
      return commentDate.toLocaleString('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }
  function addLike() {
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/comment/${comment._id}/like`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        setLikes([...likes, data]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <Box p="8" w="100%" bg="white">
      <HStack>
        <Box mr="10" w="20">
          <Image
            src={
              comment.title
                ? 'https://placekitten.com/110/110'
                : 'https://via.placeholder.com/100'
            }
            w="14"
            h="14"
            rounded="full"
          />
          <Text>{comment.title || 'Anonym'}</Text>
        </Box>
        <VStack align="start" spacing="5" flex="1">
          <Text whiteSpace="pre-wrap">{comment.content}</Text>
          <Text as="small">{getDateString()}</Text>
        </VStack>
        <VStack flexShrink="0" spacing="1">
          <Button
            variant="ghost"
            _focus={{ boxShadow: 'none' }}
            onClick={addLike}
          >
            <FaChevronUp />
          </Button>
          <Text as="span">{likes.length}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
