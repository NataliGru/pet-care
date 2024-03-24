import { Box } from '@mui/material';
import { fredoka } from '../../../theme/fonts';
import Link from 'next/link';

export const NavMenu = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      gap={'10px'}
      className={fredoka.className}
      fontSize={'20px'}
      justifyContent={'space-between'}
    >
      <Link href={'/'}>
        <Box paddingBlock={'15px'} paddingInline={'5px'}>
          About as
        </Box>
      </Link>
      <Link href={'/'}>
        <Box paddingBlock={'15px'} paddingInline={'5px'}>
          Services
        </Box>
      </Link>
      <Link href={'/'}>
        <Box paddingBlock={'15px'} paddingInline={'5px'}>
          FAQ
        </Box>
      </Link>
      <Link href={'/'}>
        <Box paddingBlock={'15px'} paddingInline={'5px'}>
          Happy Clients
        </Box>
      </Link>
      <Link href={'/'}>
        <Box paddingBlock={'15px'} paddingInline={'5px'}>
          Contacts
        </Box>
      </Link>
    </Box>
  );
};
