import {
  Box,
  Button,
  Heading,
  Input,
  Spinner,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from './Comment';

export default function Thread() {
  const { threadId } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isLoadingFormSubmit, setIsLoadingFormSubmit] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  useEffect(() => {
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`
    )
      .then(res => res.json())
      .then(data => {
        setComments(data);
        setIsLoadingPosts(false);
      });
  }, [threadId]);
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
  return (
    <Box>
      <Heading fontWeight="medium">Hejsan</Heading>
      <VStack
        h="50vh"
        alignItems="center"
        justify="center"
        hidden={!isLoadingPosts}
      >
        <Spinner hidden={!isLoadingPosts} />
      </VStack>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <Box w="70%" my="10">
        <form onSubmit={postComment}>
          <VStack align="start">
            <Textarea
              onChange={e => setComment(e.target.value)}
              onKeyDown={submitForm}
              value={comment}
              isRequired
              placeholder="Skriv din kommentar här"
              rows="5"
              bg="white"
            />
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="Namn (frivilligt)"
            />
            <Button
              isLoading={isLoadingFormSubmit}
              colorScheme="linkedin"
              type="submit"
            >
              Skicka
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
