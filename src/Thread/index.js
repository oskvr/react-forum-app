import { Button } from '@chakra-ui/button';
import { Box, Container, Heading, VStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';
import Comment from './Comment';

const initComments = [
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla exercitationem rerum fugiat nesciunt officiis unde perferendis et beatae minima dolor error ratione dolores deleniti a, suscipit cum. Esse rerum placeat quod ipsum reprehenderit asperiores quas assumenda quos, doloremque, soluta ipsa dicta obcaecati nobis facere distinctio praesentium sit aperiam incidunt.',
  },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla exercitationem rerum fugiat nesciunt officiis unde perferendis et beatae minima dolor error ratione dolores deleniti a, suscipit cum. Esse rerum placeat quod ipsum reprehenderit asperiores quas assumenda quos, doloremque, soluta ipsa dicta obcaecati nobis facere distinctio praesentium sit aperiam incidunt.',
  },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla exercitationem rerum fugiat nesciunt officiis unde perferendis et beatae minima dolor error ratione dolores deleniti a, suscipit cum. Esse rerum placeat quod ipsum reprehenderit asperiores quas assumenda quos, doloremque, soluta ipsa dicta obcaecati nobis facere distinctio praesentium sit aperiam incidunt.',
  },
];
export default function Thread() {
  const [comments, setComments] = useState(initComments);
  const [comment, setComment] = useState('');
  function addComment(e) {
    e.preventDefault();
    const newComment = { content: comment };
    setComments([...comments, newComment]);
    setComment('');
  }

  function submitForm(e) {
    if (e.ctrlKey && e.key === 'Enter') {
      addComment(e);
    }
  }
  return (
    <VStack>
      <Heading>Is this the greatest thread ever?</Heading>
      {comments.map(comment => (
        <Comment content={comment.content} />
      ))}
      <Box w="100%">
        <form onSubmit={addComment}>
          <Textarea
            onChange={e => setComment(e.target.value)}
            onKeyDown={submitForm}
            value={comment}
            placeholder="Skriv din kommentar här"
            rows="5"
            bg="white"
          />
          <Button colorScheme="linkedin" type="submit">
            Skicka
          </Button>
        </form>
      </Box>
    </VStack>
  );
}
