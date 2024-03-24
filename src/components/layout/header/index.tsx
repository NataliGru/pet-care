import { AppBar, Box, CssBaseline } from '@mui/material';
import { NavMenu, SocialMedia } from '..';
import { pacifico } from '../../../theme/fonts';

export const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Box
          color={'#011033'}
          padding={'20px'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={'10px'}
          sx={{
            background: '#ffefd6',
          }}
        >
          <Box
            className={pacifico.className}
            fontSize={'30px'}
            lineHeight={'26px'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Box>Pets </Box>
            <Box marginLeft={'5px'}>Care</Box>
          </Box>
          <Box width={'50%'}>
            <NavMenu />
          </Box>
          <SocialMedia />
        </Box>
      </AppBar>
    </>
  );
};
