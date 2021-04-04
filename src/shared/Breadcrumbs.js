import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import { useThread } from '../hooks/useThread';

export default function Breadcrumbs({ ...props }) {
  const { categoryId } = useParams();
  const { post } = useThread();
  const { current, categories } = useCategories();
  const paths = [
    { id: 0, text: 'Hem', to: '/' },
    { id: 1, text: current.title, to: `/category/${categoryId}` },
    { id: 2, text: post.title, to: '' },
  ];

  const currentPaths = paths.filter(path => path.text);
  const isCurrentPage = index => index === currentPaths.length - 1;
  if (currentPaths.length <= 1) return null;
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      {...props}
    >
      {currentPaths.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={breadcrumb.id}
          isCurrentPage={isCurrentPage(index)}
        >
          {isCurrentPage(index) ? (
            <BreadcrumbLink fontWeight="medium">
              {breadcrumb.text}
            </BreadcrumbLink>
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
