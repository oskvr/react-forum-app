import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router';

export default function CreateThreadModal({ isOpen, onClose }) {
  const { categoryId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    fetch(
      `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      }
    )
      .then(response => response.json())
      .then(thread => {
        setIsLoading(false);
        setRedirectUrl(`/thread/${thread._id}`);
        setShouldRedirect(true);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error:', error);
      });
  }
  return (
    <>
      {shouldRedirect && <Redirect push to={redirectUrl} />}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" autoFocus={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Skapa en ny tråd</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <VStack>
                <Input
                  onChange={e => setTitle(e.target.value)}
                  isRequired
                  placeholder="Titel"
                  autoFocus
                />
                <Textarea
                  onChange={e => setContent(e.target.value)}
                  isRequired
                  rows="8"
                  placeholder="Text"
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="blue"
                mr={3}
              >
                Skapa
              </Button>
              <Button type="button" variant="ghost" onClick={onClose}>
                Avbryt
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
