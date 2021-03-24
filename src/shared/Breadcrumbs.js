import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouteLink, useParams, useLocation } from 'react-router-dom';

export default function Breadcrumbs({ ...props }) {
  const { categoryId, threadId } = useParams();
  const location = useLocation();
  const { thread, categoryThreads } = useSelector(state => state.threads);
  const threadTitle = thread.data?.title;
  const categoryTitle = categoryThreads.data.length > 0 && 'Kategorinamn';
  const breadcrumbs = [
    { title: 'Hem', to: '/' },
    { title: categoryTitle, to: `/category/${categoryId}` },
    {
      title: threadTitle,
      to: `/category/${categoryId}/thread/${threadId}`,
    },
  ];

  useEffect(() => {
    console.log(location);
  });
  return (
    <Breadcrumb {...props}>
      {breadcrumbs
        .filter(b => b.title)
        .map(breadcrumb => (
          <BreadcrumbItem>
            <BreadcrumbLink as={RouteLink} to={breadcrumb.to}>
              {breadcrumb.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
}
