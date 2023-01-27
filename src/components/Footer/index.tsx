import React from "react";
import { Container } from "./style";

interface FooterProps {
  children: React.ReactElement;
}

export const Footer = ({ children }: FooterProps): React.ReactElement => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};
