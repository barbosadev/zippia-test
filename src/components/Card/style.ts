// import styled from "styled-components";

// export const Container = styled.div`
//   padding: 16px;
//   margin: 16px;
//   border-radius: 8px;
//   box-shadow: 0 15px 20px -19px rgb(0 0 0 / 20%);
//   border: 1px solid #bac4da;
//   word-break: break-word;
// `;

// export const Description = styled.div`
//   margin-top: 8px;
//   font-size: 1rem;
// `;

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const Date = styled.div`
//   color: #aaa;
// `;

import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  margin: 16px;
  word-break: break-word;
  background-color: #f5f5f5;
  box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.08),
    0px 1px 2px rgba(100, 116, 139, 0.7);
  border-radius: 8px;
`;

export const Description = styled.div`
  margin-top: 8px;
  font-size: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  color: #666;
`;

export const LinkArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled.div`
  color: #3754e2;
  text-decoration: none;
  padding-top: 8px;
  cursor: pointer;
`;
