import {
  Box,
  DialogContent,
  Dialog,
  DialogContentText,
  Typography,
  TextField,
  Divider,
  Button as MuiButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState, type FC } from "react";
import Button from "./Button";
import { Phantom } from "./Phantom";

type PhantomProvider = {
  isPhantom: boolean;
  connect: () => Promise<{ publicKey: { toString: () => string } }>;
  disconnect: () => Promise<void>;
};

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const GetStarted: FC = () => {
  const [open, setOpen] = useState(false);
  const provider = window.solana;
  const [walletConnected, setWalletConnected] = useState(false);
  const [code, setCode] = useState("");
  const [isError, setIsError] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (provider?.isPhantom) {
      try {
        const response = await provider.connect();
        console.log(response);
        setWalletAddress(response.publicKey.toString());
        setWalletConnected(true);
      } catch (err) {
        console.error("Connection to Phantom failed", err);
      }
    } else {
      if (isMobile) {
        const baseUrl = window.location.origin;
        console.log(baseUrl);

        window.location.href = `https://phantom.app/ul/browse/${baseUrl}`;
      } else {
        alert("Phantom wallet not found. Please install it.");
      }
    }
  };

  const disconnectWallet = async () => {
    if (provider?.isPhantom) {
      try {
        await provider.disconnect();
        setWalletAddress(null);
        setWalletConnected(false);
      } catch (err) {
        console.error("Failed to disconnect wallet", err);
      }
    }
  };

  const onClose = async () => {
    setOpen(false);

    await disconnectWallet();
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Get Started</Button>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth='sm'
        slotProps={{
          paper: {
            sx: { borderRadius: 0 },
          },
        }}
      >
        <Box bgcolor='transparent' border={5} borderColor='rgb(48, 71, 0)'>
          <Box
            display='flex'
            padding={2}
            bgcolor='rgb(201, 238, 106)'
            justifyContent='end'
          >
            <Box
              onClick={onClose}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Close />
            </Box>
          </Box>
          <Box textAlign='center' bgcolor='rgb(201, 238, 106)'>
            <Typography variant='h3' color='rgb(48, 71, 0)'>
              Sign in / Connect
            </Typography>
            <DialogContent>
              {walletConnected ? (
                <>
                  <DialogContentText sx={{ wordBreak: "break-all" }}>
                    Wallet connected: <strong>{walletAddress}</strong>
                  </DialogContentText>
                  <Typography color='red'>You are not eligible</Typography>
                  <Typography variant='h4' mt={3} mb={2}>
                    Do you have a code to enter the app?
                  </Typography>
                  <Box>
                    <TextField
                      onChange={(e) => {
                        setCode(e.target.value);
                        setIsError(false);
                      }}
                      helperText={
                        isError && (
                          <Typography color='red'>Code is invalid</Typography>
                        )
                      }
                    />
                  </Box>

                  <Button
                    onClick={() => {
                      if (code) {
                        setIsError(true);
                      }
                    }}
                    sx={{
                      mt: 4,
                      backgroundColor: "rgb(235, 255, 183)",
                      ":hover": {
                        backgroundColor: "rgb(235, 255, 183)",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </>
              ) : (
                <>
                  <DialogContentText>
                    <Typography variant='body2'>
                      Choose your preffered method to join the fun!
                    </Typography>
                  </DialogContentText>
                  <Divider
                    sx={{
                      my: 3,
                      borderWidth: 1.5,
                      borderColor: "rgb(48,71, 0)",
                      opacity: 0.3,
                    }}
                  />
                  <Button
                    onClick={connectWallet}
                    sx={{
                      backgroundColor: "rgb(235, 255, 183)",
                      ":hover": {
                        backgroundColor: "rgb(235, 255, 183)",
                      },
                    }}
                    startIcon={<Phantom />}
                  >
                    Connect Phantom Wallet
                  </Button>
                  <Divider
                    sx={{
                      my: 3,
                      borderWidth: 1.5,
                      borderColor: "rgb(48,71, 0)",
                      opacity: 0.3,
                    }}
                  />
                  <Typography mb={2}>Don't have a solana wallet?</Typography>
                  <MuiButton
                    component='a'
                    startIcon={<Phantom />}
                    sx={{ color: "#000" }}
                    href='https://phantom.com/'
                    target='_blank'
                  >
                    Install Phantom
                  </MuiButton>
                </>
              )}
            </DialogContent>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default GetStarted;
