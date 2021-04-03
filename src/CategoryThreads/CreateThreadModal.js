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
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { Redirect, useParams } from 'react-router';
import URL from '../api/apiEndpointConstants';

export default function CreateThreadModal() {
  const { categoryId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    fetch(URL.THREADS(categoryId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then(response => response.json())
      .then(thread => {
        setIsLoading(false);
        setRedirectUrl(`/category/${categoryId}/thread/${thread._id}`);
        setShouldRedirect(true);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error:', error);
      });
  }
  return (
    <>
      <Button onClick={onOpen} variant="outline" size="sm">
        <Text as="span" mr="2">
          <FaPen />
        </Text>
        Ny tråd
      </Button>
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
                  rows="12"
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
