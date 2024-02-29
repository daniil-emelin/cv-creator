import Container from "@mui/material/Container";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  withContainer?: boolean;
};

export const Content = ({ children, withContainer = false }: Props) => {
  if (withContainer === false) {
    return <>{children}</>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {children}
    </Container>
  );
};
