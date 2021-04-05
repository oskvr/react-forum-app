import { Grid, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { ReactComponent as NotFoundLogo } from './404.svg';
export default function NotFound() {
  return (
    <Grid placeItems="center" mt="40" gap="4">
      <Heading>Sidan kunde inte hittas</Heading>
      <Link as={RouteLink} to="/">
        Gå tillbaka till startsidan
      </Link>
      <NotFoundLogo style={{ width: '50%', height: 'auto' }} />
    </Grid>
  );
}
