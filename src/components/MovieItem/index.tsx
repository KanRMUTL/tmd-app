import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MovieItemCard } from './index.view';

interface MovieItemProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}
const MovieItem = ({
  imageUrl,
  imageAlt,
  title,
  description
}: MovieItemProps) => {
  return (
    <MovieItemCard>
      <CardMedia component="img" image={imageUrl} alt={imageAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MovieItemCard>
  );
};

export default MovieItem;
