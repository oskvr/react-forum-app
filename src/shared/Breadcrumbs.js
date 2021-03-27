import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import { useThread } from '../hooks/useThread';

export default function Breadcrumbs({ ...props }) {
  const { categoryId } = useParams();
  const { post } = useThread();
  const { categories } = useCategories();
  const currentCategory =
    categories.find(category => category._id === categoryId) ?? {};
  const paths = [
    { id: 0, text: 'Hem', to: '/' },
    { id: 1, text: currentCategory.name, to: `/category/${categoryId}` },
    { id: 2, text: post.title, to: '' },
  ];

  const currentPaths = paths.filter(path => path.text);
  if (currentPaths.length <= 1) return null;
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      {...props}
    >
      {currentPaths.map((breadcrumb, index) => (
        <BreadcrumbItem key={breadcrumb.id}>
          {index === currentPaths.length - 1 ? (
            <Text fontWeight="medium">{breadcrumb.text}</Text>
          ) : (
            <BreadcrumbLink as={RouteLink} to={breadcrumb.to}>
              {breadcrumb.text}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
