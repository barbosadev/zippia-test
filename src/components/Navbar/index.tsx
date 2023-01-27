import { Container } from "./style";

interface NavbarProps {
  children: React.ReactElement;
}

export const Navbar = ({ children }: NavbarProps): React.ReactElement => {
  return <Container>{children}</Container>;
};
