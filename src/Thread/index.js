import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Spacer,
  Spinner,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentV2 from './CommentV2';
import * as api from '../services/apiService.js';
import UpvoteButton from '../shared/UpvoteButton';
import { getFormattedDate } from '../utils/getFormattedDate';
export default function Thread() {
  const { threadId } = useParams();
  const { categoryId } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isLoadingFormSubmit, setIsLoadingFormSubmit] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [currentThread, setCurrentThread] = useState({});
  const [threadLikeCount, setThreadLikeCount] = useState([]);
  useEffect(() => {
    async function getThreads() {
      const threads = await api.fetchThreadsByCategory(categoryId);
      const current = threads.find(thread => thread._id === threadId);
      setCurrentThread(current);
      setThreadLikeCount(current.likes.length);
    }
    getThreads();
  }, [categoryId, threadId]);
  useEffect(() => {
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`
    )
      .then(res => res.json())
      .then(data => {
        const sorted = sortByLikeCountDesc(data);
        setComments(sorted);
        setIsLoadingPosts(false);
      });
  }, [threadId]);
  function sortByLikeCountDesc(data) {
    return data.sort((a, b) => b.likes.length - a.likes.length);
  }
  function postComment(e) {
    e.preventDefault();
    if (!comment) return;
    const newComment = {
      title: name,
      content: comment,
    };
    setIsLoadingFormSubmit(true);
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      }
    )
      .then(response => response.json())
      .then(comment => {
        setIsLoadingFormSubmit(false);
        setComments([...comments, comment]);
        setComment('');
        setName('');
      })
      .catch(error => {
        setIsLoadingFormSubmit(false);
        console.error('Error:', error);
      });
  }
  function submitForm(e) {
    if (e.ctrlKey && e.key === 'Enter') {
      postComment(e);
    }
  }
  function likeThread() {
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/like`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(() => {
        setThreadLikeCount(threadLikeCount + 1);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <Box>
      <HStack>
        <UpvoteButton handleClick={likeThread} likeCount={threadLikeCount} />
        <Box w="100%">
          <Heading fontWeight="medium">{currentThread.title}</Heading>
          <Text my="5" whiteSpace="pre-wrap">
            {currentThread.content}
          </Text>
          <HStack>
            <Text as="small">{getFormattedDate(currentThread.createdAt)}</Text>
            <Spacer />
            <Text as="small" fontWeight="semibold">
              {comments.length}{' '}
              {comments.length === 1 ? 'kommentar' : 'kommentarer'}
            </Text>
          </HStack>
          <Divider my="5" />
        </Box>
      </HStack>
      <VStack
        h="50vh"
        alignItems="center"
        justify="center"
        hidden={!isLoadingPosts}
      >
        <Spinner hidden={!isLoadingPosts} />
      </VStack>
      {comments.map(comment => (
        <CommentV2 key={comment._id} comment={comment} />
      ))}
      <Box w="100%" my="10">
        <form onSubmit={postComment}>
          <Box>
            <Input
              variant="filled"
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="Namn (frivilligt)"
            />
            <Textarea
              variant="filled"
              my="3"
              onChange={e => setComment(e.target.value)}
              onKeyDown={submitForm}
              value={comment}
              isRequired
              placeholder="Kommentar"
              rows="7"
            />
            <Button
              isLoading={isLoadingFormSubmit}
              colorScheme="blue"
              type="submit"
            >
              Skicka
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
