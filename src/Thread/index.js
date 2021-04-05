import {
  Box,
  Divider,
  Heading,
  HStack,
  ScaleFade,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import URL from '../api/apiEndpointConstants';
import { useThread } from '../hooks/useThread';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
import CommentForm from './CommentForm';
import Comment from './Comment';
export default function Thread() {
  const { comments, post, isLoading } = useThread();
  const { threadId } = useParams();
  const [likeCount, setLikeCount] = useState(null);
  useEffect(() => {
    setLikeCount(post.likes?.length);
  }, [post]);

  async function likeThread() {
    try {
      await fetch(URL.LIKE_THREAD(threadId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.erro(error);
    }
  }
  function sortByLikeCountDesc(data) {
    return data.sort((a, b) => b.likes.length - a.likes.length);
  }
  return (
    <Box>
      <HStack>
        <UpvoteButton handleClick={likeThread} likeCount={likeCount} />
        <Box w="100%">
          <Heading fontWeight="medium">{post.title}</Heading>
          <Text my="5" whiteSpace="pre-wrap">
            {post.content}
          </Text>
          <HStack>
            <Text as="small">{getFormattedDate(post.createdAt)}</Text>
            <Spacer />
            <Text as="small" fontWeight="semibold">
              {likeCount} gillar
            </Text>
            <Text as="small" fontWeight="semibold">
              {comments.length}{' '}
              {comments.length === 1 ? 'kommentar' : 'kommentarer'}
            </Text>
          </HStack>
          <Divider my="5" />
        </Box>
      </HStack>
      <VStack h="50vh" alignItems="center" justify="center" hidden={!isLoading}>
        <Spinner hidden={!isLoading} />
      </VStack>
      {comments.map(comment => (
        <ScaleFade in={true} initialScale={0.98}>
          <Comment key={comment._id} comment={comment} />
        </ScaleFade>
      ))}
      <CommentForm w="100%" my="10" />
    </Box>
  );
}
