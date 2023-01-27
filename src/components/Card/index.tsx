import { Collapse } from "@chakra-ui/react";
import { Container, Description, Header, Date } from "./style";
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
        <a
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "See less" : "See more"}
        </a>
      </Description>
    </Container>
  );
};
