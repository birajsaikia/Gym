import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={'center'}
      justifyContent={'center'}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: '1800', left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt="gym"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
      <Typography
        fontSize={'24px'}
        fontWeight={'bold'}
        color={'#3A1212'}
        textTransform={'capitalize'}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
