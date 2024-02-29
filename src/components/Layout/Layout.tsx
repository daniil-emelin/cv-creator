import { Outlet } from "react-router-dom";

import { Header } from "components/Header";
import { Content } from "components/Content";

import type { ReactNode } from "react";

type Props = {
  withContainer?: boolean;
  children?: ReactNode;
};

export const Layout = ({ children, withContainer }: Props) => (
  <>
    <Header />
    <Content withContainer={withContainer}>
      <Outlet />
    </Content>
  </>
);
