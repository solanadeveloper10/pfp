import { Box, Container, Typography } from "@mui/material";
import { HEADER_HEIGHT } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const memoryUsage = "640K"; // This could be dynamic if you want to show actual memory usage
  const cpuInfo = "8-BIT"; // This could be dynamic if you want to show actual CPU info

  return (
    <Box
      sx={{
        backgroundColor: "rgb(48,71, 0)",
        height: HEADER_HEIGHT,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth='xl' sx={{ height: "100%" }}>
        <Box
          height='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box display='flex' alignItems='center' gap={1}>
            <Box
              height={12}
              width={12}
              borderRadius={100}
              bgcolor='rgb(239, 68, 68)'
            ></Box>
            <Box
              height={12}
              width={12}
              borderRadius={100}
              bgcolor='rgb(234, 179, 8)'
            ></Box>
            <Box
              height={12}
              width={12}
              borderRadius={100}
              bgcolor='rgb(34, 197, 94)'
            ></Box>
          </Box>
          <Typography variant='body1' color='rgb(235, 255, 183)'>
            GOCHI OS v1.0 © {currentYear} - MEMORY: {memoryUsage} - CPU:{" "}
            {cpuInfo} - READY.
          </Typography>
          <Typography variant='body1'></Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
