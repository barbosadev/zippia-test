import { Collapse } from "@chakra-ui/react";
import { Button } from "../Button";
import { Container, Description, Header, Date, LinkButton } from "./style";
import { useCard } from "./useCard";

interface CardProps {
  title: string;
  company: string;
  description: string;
  date: string;
}

export const Card = ({
  title,
  company,
  description,
  date,
}: CardProps): React.ReactElement => {
  const { showMore, setShowMore } = useCard();

  return (
    <Container>
      <Header>
        <h4>{title}</h4>
        <Date>{date}</Date>
      </Header>
      <h5>{company}</h5>
      <Description>
        <Collapse startingHeight={48} in={showMore}>
          {description}
        </Collapse>
        <LinkButton
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "See less" : "See more"}
        </LinkButton>
      </Description>
    </Container>
  );
};
