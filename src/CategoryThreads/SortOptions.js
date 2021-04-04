import { Box, HStack, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCalendar, FaComment, FaFire } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { updateSort } from '../redux/sorting';
export default function SortOptions() {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     const params = new URLSearchParams();
  //     if (query) {
  //       params.append('sort', query);
  //     } else {
  //       params.delete('sort');
  //     }
  //     history.push({ search: params.toString() });
  //   }, [query, history]);

  const options = [
    { id: 0, value: 'createdAt', text: 'Datum', icon: <FaCalendar /> },
    { id: 1, value: 'comments', text: 'Kommentarer', icon: <FaComment /> },
    { id: 2, value: 'likes', text: 'Röster', icon: <FaFire /> },
  ];
  function handleChange(e) {
    const target = e.target.value;
    dispatch(updateSort(target));
  }
  return (
    <Tabs size="sm" variant="solid-rounded" colorScheme="blue">
      <TabList>
        {options.map(option => (
          <Tab
            key={option.id}
            onClick={handleChange}
            value={option.value}
            _focus={{ outline: 'none' }}
            px="4"
            py="2"
          >
            <Text as="span" pointerEvents="none" mr="2">
              {option.icon}
            </Text>
            {option.text}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
