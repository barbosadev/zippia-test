import { ActiveButton, Container } from "./style";

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
  return active ? (
    <ActiveButton onClick={onClick}>{children}</ActiveButton>
  ) : (
    <Container onClick={onClick}>{children}</Container>
  );
}
