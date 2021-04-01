import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import URL from '../api/apiEndpointConstants';
import useTruncate from '../hooks/useTruncate';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
export default function CommentV2({ comment }) {
  const [likeCount, setLikeCount] = useState(comment.likes.length);
  const date = getFormattedDate(comment.createdAt);
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const {
    outputString: commentBody,
    shouldTruncate,
    onToggleTruncate,
    isTruncated,
  } = useTruncate(comment.content, {
    maxLength: 1500,
    ending: '\u2026',
  });
  function addLike() {
    fetch(URL.LIKE_COMMENT(comment._id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(() => {
        setLikeCount(likeCount + 1);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <Box w="100%" p="1">
      <Box d="flex" position="relative">
        <Box position="absolute" top="0" left="0" mr="4">
          <Avatar name={comment.title} />
          {/* <LetterIcon text={comment.title} /> */}
        </Box>
        <Box
          ml="6"
          pl="10"
          spacing="3"
          flex="1"
          borderLeft="2px"
          borderColor={borderColor}
        >
          <Stack mb="10" spacing="3">
            {comment.title ? (
              <Text as="small" color="blue.500" fontWeight="semibold">
                {comment.title}
              </Text>
            ) : (
              <Text as="small" fontWeight="semibold">
                Anonym
              </Text>
            )}
            <Text whiteSpace="pre-wrap">
              {commentBody}{' '}
              {shouldTruncate && (
                <Button
                  variant="link"
                  _focus={{ outline: 'none' }}
                  onClick={onToggleTruncate}
                  ml="1"
                >
                  {isTruncated ? 'Visa mer' : 'Visa mindre'}
                </Button>
              )}
            </Text>
            {/* TODO:Välj hur truncate-knappen ska vara, antingen nedan eller ovan */}
            {shouldTruncate && (
              <Button variant="outline" onClick={onToggleTruncate}>
                {isTruncated ? 'Visa mer' : 'Visa mindre'}
              </Button>
            )}
            <Text as="small" opacity="0.8">
              {date}
            </Text>
          </Stack>
        </Box>
        <UpvoteButton handleClick={addLike} likeCount={likeCount} />
      </Box>
    </Box>
  );
}
