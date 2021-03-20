import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link as RouteLink, useParams } from 'react-router-dom';

export default function Breadcrumbs({ ...props }) {
  const { categoryId, threadId } = useParams();

  useEffect(() => {
    console.log(categoryId);
  });
  return (
    <Breadcrumb {...props}>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouteLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouteLink} to={`/category/${categoryId}`}>
          Category
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouteLink} to={`/category/${categoryId}`}>
          Thread
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
