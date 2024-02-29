import type { ReactNode } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  children: ReactNode;
  title: string;
  onAddItem?: VoidFunction;
};

export const Section = ({ children, title, onAddItem }: Props) => (
  <Stack direction="column" spacing={2}>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography>{title}</Typography>
      {onAddItem !== undefined ? (
        <IconButton color="success" onClick={onAddItem}>
          <AddIcon />
        </IconButton>
      ) : null}
    </Stack>
    {children}
  </Stack>
);
