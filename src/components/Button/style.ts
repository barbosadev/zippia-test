import styled from "styled-components";

export const Container = styled.button`
  font-size: 1rem;
  background: #fff;
  border: 1px solid #bac4da;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: filter 0.2s;
  color: #3174ee;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ActiveButton = styled(Container)`
  background: #3174aa;
  color: #fff;
`;
