import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postNewComment } from '../redux/threads';

export default function CommentForm(props) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const { isLoadingNewComment } = useSelector(state => state.threads);
  function postComment(e) {
    e.preventDefault();
    if (!content) return;
    const comment = {
      title: author,
      content: content,
    };
    dispatch(postNewComment({ threadId, comment })).then(() => {
      setContent('');
      setAuthor('');
    });
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
          <Button
            isLoading={isLoadingNewComment}
            colorScheme="blue"
            type="submit"
          >
            Skicka
          </Button>
        </Box>
      </form>
    </Box>
  );
}
