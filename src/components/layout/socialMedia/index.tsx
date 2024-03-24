import { Box } from '@mui/material';
import Image from 'next/image';
import youtube from './../../../../public/icons/youtube.svg';
import fb from './../../../../public/icons/fb.svg';
import twi from './../../../../public/icons/tweet.svg';
import insta from './../../../../public/icons/ig.svg';
import Link from 'next/link';

export const SocialMedia = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} gap={'10px'}>
      <Link href={'/'}>
        <Image src={youtube} alt="youtube" width={40} height={40} />
      </Link>
      <Link href={'/'}>
        <Image src={fb} alt="fb" width={40} height={40} />
      </Link>
      <Link href={'/'}>
        <Image src={twi} alt="twi" width={40} height={40} />
      </Link>
      <Link href={'/'}>
        <Image src={insta} alt="insta" width={40} height={40} />
      </Link>
    </Box>
  );
};
