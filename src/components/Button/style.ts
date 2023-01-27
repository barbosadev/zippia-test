import styled from "styled-components";

export const Container = styled.button<{ active: Boolean }>`
  font-size: 1rem;
  background: ${(props) => (props.active ? "#3174ee" : "#fff")};
  border: 1px solid #3174ee;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: filter 0.2s;
  color: ${(props) => (props.active ? "#fff" : "#3174ee")};
`;
