import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 16px;
  margin: 16px;
  word-break: break-word;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.07),
    0px 1px 2px rgba(100, 116, 139, 0.7);
  border-radius: 8px;
`;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  line-height: 1.4;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  color: rgba(122, 187, 165, 1);
  background-color: rgba(226, 250, 242, 1);
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 0.9rem;
`;

export const LinkArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled.div`
  color: #3754e2;
  text-decoration: none;
  padding-top: 4px;
  cursor: pointer;
  font-size: 0.9rem;
`;
