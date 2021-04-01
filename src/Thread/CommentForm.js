import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import URL from '../api/apiEndpointConstants';
import { useThread } from '../hooks/useThread';
export default function CommentForm(props) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { threadId } = useParams();
  const { mutate } = useThread();
  const [isLoading, setIsLoading] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacterCount = 5000;
  async function postComment(e) {
    e.preventDefault();
    if (!content) return;
    const comment = {
      title: author,
      content: content,
    };
    setIsLoading(true);
    await fetch(URL.COMMENT(threadId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    // const data = await res.json();
    mutate();
    setIsLoading(false);
    setContent('');
    setAuthor('');
  }

  function submitOnCtrlEnter(e) {
    if (e.ctrlKey && e.key === 'Enter') {
      postComment(e);
    }
  }

  return (
    <Box {...props}>
      <form onSubmit={postComment}>
        <Box>
          <Input
            variant="filled"
            onChange={e => setAuthor(e.target.value)}
            value={author}
            placeholder="Namn (frivilligt)"
          />
          <Box pos="relative">
            <Text
              fontSize="xs"
              color="gray.500"
              pos="absolute"
              right="2"
              bottom="0"
              zIndex="1"
            >
              {characterCount}/{maxCharacterCount}
            </Text>
            <Textarea
              maxLength={maxCharacterCount}
              variant="filled"
              my="3"
              onChange={e => {
                setCharacterCount(e.target.value.length);
                setContent(e.target.value);
              }}
              onKeyDown={submitOnCtrlEnter}
              value={content}
              isRequired
              placeholder="Kommentar"
              rows="7"
            />
          </Box>
          <Button isLoading={isLoading} colorScheme="blue" type="submit">
            Skicka
          </Button>
        </Box>
      </form>
    </Box>
  );
}
