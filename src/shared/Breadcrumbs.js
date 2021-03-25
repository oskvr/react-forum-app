import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import React from 'react';
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
    { text: 'Hem', to: '/' },
    { text: currentCategory.name, to: `/category/${categoryId}` },
    { text: post.title, to: '' },
  ];

  const currentPaths = paths.filter(path => path.text);

  return (
    <Breadcrumb {...props}>
      {currentPaths.map((breadcrumb, index) => (
        <BreadcrumbItem>
          {index === currentPaths.length - 1 ? (
            <Text>{breadcrumb.text}</Text>
          ) : (
            <BreadcrumbLink opacity="0.8" as={RouteLink} to={breadcrumb.to}>
              {breadcrumb.text}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
