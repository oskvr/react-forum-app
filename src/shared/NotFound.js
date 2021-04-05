import { Grid, Heading, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { ReactComponent as NotFoundLogo } from './404.svg';
export default function NotFound() {
  useEffect(() => {
    document.title = 'Sidan kunde inte hittas';
  }, []);
  return (
    <Grid placeItems="center" mt="20" gap="4">
      <Heading mb="3">Sidan kunde inte hittas</Heading>
      <Link as={RouteLink} to="/">
        Gå tillbaka till startsidan
      </Link>
      <NotFoundLogo style={{ maxWidth: '100%', height: 'auto' }} />
    </Grid>
  );
}
