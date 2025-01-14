"use client"
import { Box } from '@mui/material';
import { Social } from '@/app/types/';
import Grid from '@mui/material/Grid2'
import Link from "next/link";
import Image from 'next/image';

interface SocialsProps {
    socials: Social[]; 
  }

const Contacts: React.FC<SocialsProps> = ({ socials }) => {
  
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container rowSpacing={{ xs: 8, md:12, lg: 20 }} columnSpacing={{ xs: 3, sm: 36, md: 8 }}
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
export default Contacts;