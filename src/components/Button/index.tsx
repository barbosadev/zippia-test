import { Container } from "./style";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  active: Boolean;
}

export function Button({
  children,
  onClick,
  active,
}: ButtonProps): React.ReactElement {
  return (
    <Container active={active} onClick={onClick}>
      {children}
    </Container>
  );
}
