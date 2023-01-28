import { Collapse } from "@chakra-ui/react";
import { Button } from "../Button";
import {
  Container,
  Description,
  Header,
  Date,
  LinkButton,
  LinkArea,
} from "./style";
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
        <h3>{title}</h3>
        <Date>{date}</Date>
      </Header>
      <h4>{company}</h4>
      <Description>
        <Collapse startingHeight={"4rem"} in={showMore}>
          {description}
        </Collapse>
        <LinkArea>
          <LinkButton
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "See less" : "See more"}
          </LinkButton>
        </LinkArea>
      </Description>
    </Container>
  );
};
