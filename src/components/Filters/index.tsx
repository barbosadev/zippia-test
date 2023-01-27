import { ButtonsArea, Container } from "./style";

interface FiltersProps {
  children: React.ReactElement[];
  title: string;
}

export const Filters = ({
  children,
  title,
}: FiltersProps): React.ReactElement => {
  return (
    <Container>
      <h3>{title}</h3>
      <ButtonsArea>{children}</ButtonsArea>
    </Container>
  );
};
