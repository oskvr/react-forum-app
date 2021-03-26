import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postNewComment } from '../redux/threads';
import * as API from '../api/apiService';
import { useThread } from '../hooks/useThread';
import URL from '../api/apiEndpointConstants';
export default function CommentForm(props) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { threadId } = useParams();
  const { mutate } = useThread();
  const [isLoading, setIsLoading] = useState(false);
  async function postComment(e) {
    e.preventDefault();
    if (!content) return;
    const comment = {
      title: author,
      content: content,
    };
    // API.postComment(threadId, comment).then(() => {
    //   mutate();
    //   setContent('');
    //   setAuthor('');
    // });
    // mutate(comments, [...comments, comment], false);
    setIsLoading(true);
    const res = await fetch(URL.COMMENT(threadId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    const data = await res.json();
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
          <Textarea
            variant="filled"
            my="3"
            onChange={e => setContent(e.target.value)}
            onKeyDown={submitOnCtrlEnter}
            value={content}
            isRequired
            placeholder="Kommentar"
            rows="7"
          />
          <Button isLoading={isLoading} colorScheme="blue" type="submit">
            Skicka
          </Button>
        </Box>
      </form>
    </Box>
  );
}
