import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink, useParams } from 'react-router-dom';

export default function Breadcrumbs({ ...props }) {
  const { categoryId, threadId } = useParams();

  return (
    <Breadcrumb {...props}>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouteLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouteLink} to={`/category/${categoryId}`}>
          Allmänt
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
