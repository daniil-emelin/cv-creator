import { default as MUIButton } from "@mui/material/Button";

import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = { children: ReactNode } & ButtonProps;

export const Button = ({ children, ...buttonProps }: Props) => {
  return (
    <MUIButton type="submit" variant="contained" size="large" {...buttonProps}>
      {children}
    </MUIButton>
  );
};
