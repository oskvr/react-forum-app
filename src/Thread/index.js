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
import NotFound from '../shared/NotFound';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
import Comment from './Comment';
import CommentForm from './CommentForm';
export default function Thread() {
  const { comments, post, isLoading, error } = useThread();
  const { threadId } = useParams();
  const [likeCount, setLikeCount] = useState(null);
  useEffect(() => {
    setLikeCount(post.likes?.length);
  }, [post]);

  useEffect(() => {
    document.title = post.title;
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

  // Not sure about this but it works for now
  if (!isLoading && (error || !post.content)) {
    return <NotFound />;
  }
  return (
    <Box>
      <VStack align="flex-start">
        <HStack>
          <UpvoteButton handleClick={likeThread} likeCount={likeCount} />
          <Heading fontWeight="medium">{post.title}</Heading>
        </HStack>
        <Box w="95%">
          <Text my="5" ml="5" whiteSpace="pre-wrap">
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
      </VStack>
      <VStack h="50vh" alignItems="center" justify="center" hidden={!isLoading}>
        <Spinner hidden={!isLoading} />
      </VStack>
      {comments.map(comment => (
        <ScaleFade key={comment._id} in={true} initialScale={0.98}>
          <Comment comment={comment} />
        </ScaleFade>
      ))}
      <CommentForm w="100%" my="10" />
    </Box>
  );
}
