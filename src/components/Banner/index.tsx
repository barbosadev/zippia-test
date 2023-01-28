import { Container, TextOne, TextTwo } from "./style";

interface BannerProps {
  textOne: string;
  textTwo: string;
}

export const Banner = ({
  textOne,
  textTwo,
}: BannerProps): React.ReactElement => {
  return (
    <Container>
      <TextOne>{textOne}</TextOne>
      <TextTwo>{textTwo}</TextTwo>
    </Container>
  );
};
