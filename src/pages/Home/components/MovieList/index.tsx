import { Grid } from '@mui/material';
import React from 'react';
import MovieItem from '../../../../components/MovieItem';
const MovieList = () => (
  <Grid container spacing={2}>
    <Grid item sm={6} xs={12} xl={3}>
      <MovieItem
        imageUrl="https://cf.shopee.co.th/file/7efe79839f46c2ac0a167ea801762d23"
        imageAlt="Movie poster"
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
      />
    </Grid>
    <Grid item sm={6} xs={12} xl={3}>
      <MovieItem
        imageUrl="https://cf.shopee.co.th/file/7efe79839f46c2ac0a167ea801762d23"
        imageAlt="Movie poster"
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
      />
    </Grid>
    <Grid item sm={6} xs={12} xl={3}>
      <MovieItem
        imageUrl="https://cf.shopee.co.th/file/7efe79839f46c2ac0a167ea801762d23"
        imageAlt="Movie poster"
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
      />
    </Grid>
    <Grid item sm={6} xs={12} xl={3}>
      <MovieItem
        imageUrl="https://cf.shopee.co.th/file/7efe79839f46c2ac0a167ea801762d23"
        imageAlt="Movie poster"
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
      />
    </Grid>
  </Grid>
);
export default MovieList;
