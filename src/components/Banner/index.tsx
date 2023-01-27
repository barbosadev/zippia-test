import { Container } from "./style";

interface BannerProps {
  children: string;
}

export const Banner = ({ children }: BannerProps): React.ReactElement => {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
};
