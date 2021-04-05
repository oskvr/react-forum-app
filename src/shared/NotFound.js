import { Box, Grid, Heading } from '@chakra-ui/layout';
import React from 'react';
import { ReactComponent as NotFoundLogo } from './404.svg';
export default function NotFound() {
  return (
    <Grid placeItems="center" mt="40">
      <Heading mb="6">Sidan kunde inte hittas</Heading>
      <NotFoundLogo style={{ width: '50%', height: 'auto' }} />
    </Grid>
  );
}
