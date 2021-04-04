import { Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FaArrowDown,
  FaArrowUp,
  FaCalendar,
  FaComment,
  FaFire,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateSort } from '../redux/sorting';

const options = [
  { id: 0, value: 'createdAt', text: 'Datum', icon: <FaCalendar /> },
  { id: 1, value: 'comments', text: 'Kommentarer', icon: <FaComment /> },
  { id: 2, value: 'likes', text: 'Röster', icon: <FaFire /> },
];

export default function SortOptions() {
  const dispatch = useDispatch();
  const { sortOptions } = useSelector(state => state.sorting);
  const tabIndex = options.findIndex(
    option => option.value === sortOptions.target
  );
  function handleChange(e) {
    const target = e.target.value;
    dispatch(updateSort(target));
  }
  return (
    <Tabs
      defaultIndex={tabIndex}
      size="sm"
      variant="solid-rounded"
      colorScheme="blue"
    >
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
            <SortOrderIcon />
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
function SortOrderIcon() {
  const { sortOptions } = useSelector(state => state.sorting);
  if (sortOptions.order === 'asc') {
    return <FaArrowUp />;
  } else {
    return <FaArrowDown />;
  }
}
