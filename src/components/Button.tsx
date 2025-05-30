import {
  Button as MuiButton,
  Typography,
  type ButtonProps,
} from "@mui/material";
import type { FC } from "react";

const Button: FC<ButtonProps & { children: string }> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <MuiButton
      sx={{
        backgroundColor: "rgb(201, 238, 106)",
        borderRadius: 0,
        padding: "4px 40px",
        border: 4,
        borderColor: "rgb(48, 71, 0)",
        "&:hover": {
          backgroundColor: "#C4E86B",
        },
        ...sx,
      }}
      {...rest}
    >
      <Typography
        variant='body1'
        component='span'
        width='100%'
        textAlign='center'
        fontSize={18}
        fontWeight={500}
        sx={{
          "&:before": {
            content: '""',
            width: "25%",
            border: 2,
            borderColor: "#fff",
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        {children}
      </Typography>
    </MuiButton>
  );
};

export default Button;
