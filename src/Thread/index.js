import {
  Box,
  Divider,
  Heading,
  HStack,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearThread, fetchThread, postThreadLike } from '../redux/threads';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
import CommentForm from './CommentForm';
import CommentV2 from './CommentV2';
export default function Thread() {
  const { threadId } = useParams();
  const { categoryId } = useParams();
  const { thread } = useSelector(state => state.threads);
  const dispatch = useDispatch();
  const { _id, title, content, createdAt, comments, likes } = thread.data;

  useEffect(() => {
    dispatch(fetchThread({ threadId, categoryId }));
    return () => dispatch(clearThread());
  }, []);

  function sortByLikeCountDesc(data) {
    return data.sort((a, b) => b.likes.length - a.likes.length);
  }

  function likeThread() {
    dispatch(postThreadLike(threadId));
  }
  return (
    <Box>
      <HStack>
        <UpvoteButton handleClick={likeThread} likeCount={likes?.length} />
        <Box w="100%">
          <Heading fontWeight="medium">{title}</Heading>
          <Text my="5" whiteSpace="pre-wrap">
            {content}
          </Text>
          <HStack>
            <Text as="small">{getFormattedDate(createdAt)}</Text>
            <Spacer />
            <Text as="small" fontWeight="semibold">
              {comments?.length}{' '}
              {comments?.length === 1 ? 'kommentar' : 'kommentarer'}
            </Text>
          </HStack>
          <Divider my="5" />
        </Box>
      </HStack>
      <VStack
        h="50vh"
        alignItems="center"
        justify="center"
        hidden={!thread.data.isLoading}
      >
        <Spinner hidden={!thread.data.isLoading} />
      </VStack>
      {comments?.map(comment => (
        <CommentV2 key={comment._id} comment={comment} />
      ))}
      <CommentForm w="100%" my="10" />
    </Box>
  );
}
