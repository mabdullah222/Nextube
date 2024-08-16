import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Avatar } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const VideoCard = ({ item:{snippet:{channelTitle, thumbnails:{medium:{url:thumbnail,height,width}}, description, publishTime, publishedAt}}}) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <Card sx={{
      maxWidth: 345,
      boxShadow: 'none',
      borderRadius: 2,
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: 'lightgrey',
      },
    }}>
      <CardMedia
        component="img"
        height={height}
        width={width}
        image={thumbnail}
        alt="Video thumbnail"
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {channelTitle}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary' }}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ fontSize: 16, marginRight: 0.5 }} />
            <Typography variant="body2">{formattedDate}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
