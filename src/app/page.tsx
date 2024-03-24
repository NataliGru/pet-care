import Image from 'next/image';
import styles from './page.module.css';
import { Box, Container } from '@mui/material';
import { HomePage } from '../pages/home';

const Home = () => {
  return (
    <Box height={'100vh'} marginTop={'110px'}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#ffefd6',
        }}
      >
        <HomePage />
      </Container>
    </Box>
  );
};

export default Home;
