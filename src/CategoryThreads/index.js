import { Box, Flex, HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { FaCommentAlt, FaRegComment, FaThumbsUp } from 'react-icons/fa';
import { Link as RouteLink, useParams } from 'react-router-dom';

const mockThreads = [
  {
    comments: [
      {
        likes: [],
        _id: '6053d9c3fc9cd8001eef9407',
        title: 'Hej',
        content: 'Det här är min första kommentar',
        createdAt: '2021-03-18T22:52:51.046Z',
        __v: 0,
      },
    ],
    likes: [],
    _id: '60538f7dfc9cd8001eef9404',
    title: 'Det här är ett test',
    content: 'Hej, jag testar det här cool API:et',
    createdAt: '2021-03-18T17:35:57.571Z',
    __v: 0,
  },
];
export default function CategoryThreads() {
  const [threads, setThreads] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    let tempArray = [];
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    tempArray.push(mockThreads[0]);
    setThreads(tempArray);
  }, []);

  {
    //   useEffect(() => {
    //     fetch(
    //       `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`
    //     )
    //       .then(res => res.json())
    //       .then(data => {
    //         let tempArray = [];
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         tempArray.push(data[0]);
    //         setThreads(tempArray);
    //       });
    //   }, [categoryId]);
  }
  return (
    <div>
      {threads.map(thread => (
        <Box my="5">
          <HStack>
            <Flex
              align="center"
              justify="center"
              rounded="full"
              shrink="0"
              w="14"
              h="14"
              p="4"
              mr="3"
              bg={'blue.500'}
            >
              <Box fontSize="2xl" color="white" userSelect="none">
                T
              </Box>
            </Flex>
            <Box w="100%">
              <Link
                as={RouteLink}
                to={`/thread/${thread._id}`}
                color="blue.500"
                fontSize="xl"
                fontWeight="bold"
              >
                {thread.title}
              </Link>
              <Text color="gray.600" fontSize="sm" w="50%">
                {new Date(thread.createdAt).toDateString()}
              </Text>
            </Box>
            <Spacer />
            <HStack spacing="5">
              <HStack>
                <Text as="span" fontSize="xl">
                  {thread.comments.length}
                </Text>
                <FaCommentAlt />
              </HStack>
              <HStack>
                <Text as="span" fontSize="xl">
                  12
                </Text>
                <FaThumbsUp />
              </HStack>
              <Box h="14" w="1" bg="blue.500"></Box>
            </HStack>
          </HStack>
        </Box>
      ))}
    </div>
  );
}
