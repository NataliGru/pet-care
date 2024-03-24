import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import cat from './../../../../../public/images/red-cat.png';
import { fredoka } from '../../../../theme/fonts';

const TitleBlock = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      className={fredoka.className}
    >
      <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
        <Typography
          width={'80%'}
          fontSize={'70px'}
          fontWeight={900}
          color={'#011033'}
          lineHeight={'60px'}
        >
          Your Pet Deserves the Best Care
        </Typography>
        <Typography fontWeight={900} color={'#f5b41d'}>
          We offer professional pet care services in your city.
        </Typography>

        <Box
          width={'50%'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          fontWeight={900}
        >
          <Button
            sx={{
              background: '#ee7c95',
              borderRadius: '30px',
              padding: '10px',
              color: '#fff',
              fontWeight: 700,
            }}
          >
            Order Services
          </Button>
          <Button
            sx={{
              padding: '10px',
              color: '#011033',
              fontWeight: 900,
            }}
          >
            Call us
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          position={'relative'}
          right={'-120px'}
          sx={{
            background: '#f5b41d',
            border: '10px solid #fff',
            borderRadius: '100px',
          }}
        >
          <Image src={cat} alt="cat" height={500} width={500} />
        </Box>
      </Box>
    </Box>
  );
};

export default TitleBlock;
