import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import URL from '../api/apiEndpointConstants';
import LetterIcon from '../shared/LetterIcon';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
export default function CommentV2({ comment }) {
  const [likeCount, setLikeCount] = useState(comment.likes.length);
  const date = getFormattedDate(comment.createdAt);
  const borderColor = useColorModeValue('gray.200', 'gray.700');
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
  const exceedsMaximumLines = comment.content.length > 100;
  const [showMore, setShowMore] = useState(false);

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
            <Text whiteSpace="pre-wrap" noOfLines={showMore ? 99999999 : 20}>
              {comment.content}
            </Text>
            {exceedsMaximumLines && (
              <Button variant="outline" onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Visa mindre' : 'Visa mer'}
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
