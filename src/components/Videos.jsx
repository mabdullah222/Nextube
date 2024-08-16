import React from 'react';
import VideoCard from './VideoCard';
import { Grid, Box } from '@mui/material';
import useYoutube from '../../hooks/useYoutube';

const Videos = ({ query }) => {
  const { isLoading, data } = useYoutube(query);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <VideoCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
