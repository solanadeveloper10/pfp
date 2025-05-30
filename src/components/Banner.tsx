import { Box, Typography } from "@mui/material";
import Button from "./Button";

const Banner = () => {
  return (
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ backgroundImage: "url(/landingbg.png)", backgroundSize: "cover" }}
    >
      <Box display='flex' flexDirection={{ xs: "column", md: "row" }} gap={2}>
        <Box display='flex' flexDirection='column'>
          <img height={150} src='/typelogo.svg' alt='logo' />
          <Box
            mt={4}
            padding={1.5}
            bgcolor='transparent'
            border={1}
            borderColor='rgb(48, 71, 0)'
          >
            <Box display='flex' bgcolor='rgb(48, 71, 0)' mb={1} gap={0.5}>
              <Box height={12} width={12} bgcolor='rgb(235, 255, 183)'></Box>
              <Box height={12} width={12} bgcolor='rgb(235, 255, 183)'></Box>
              <Box height={12} width={12} bgcolor='rgb(235, 255, 183)'></Box>
            </Box>
            <Box
              maxWidth={350}
              textAlign='center'
              padding={1}
              bgcolor='rgb(235, 255, 183)'
            >
              <Typography
                variant='body1'
                color='rgb(48, 71, 0)'
                fontSize='1.25rem'
              >
                GOCHI is an AI pet game that combines nostalgic Tamagotchi-style
                gameplay with crypto rewards. Players care for digital cat to
                earn SOLANA.
              </Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' mt={4}>
            <Button>Get Started</Button>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' gap={2}>
          <img height={300} src='/idle.webp' alt='logo' />
          <img height={100} src='/typelogo.svg' alt='logo' />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
