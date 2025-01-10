"use client"
import { Box } from '@mui/material';
import { Social } from '@/app/types/socialTypes';
import Grid from '@mui/material/Grid2'
import Link from 'next/link';
import Image from 'next/image';

interface SocialsProps {
    socials: Social[]; 
  }

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container rowSpacing={20} columnSpacing={{ xs: 4, sm: 2, md: 3 }}
      >
        {socials.map((social, index) => (
          <Grid key={index} size={6}>
            <Link href={social.link} key={index} passHref target="_blank" rel="noopener noreferrer">
                    <Image
                    src={social.image}
                    alt={social.name}
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                    />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Socials;