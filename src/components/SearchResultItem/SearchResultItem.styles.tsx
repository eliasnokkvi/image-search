import styled from "styled-components";

export const ResultImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ResultTitle = styled.span`
  font-size: 16px;
  font-weight: 550;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ResultWebsite = styled.span`
  font-size: 14px;

  :hover {
    text-decoration: underline;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px;

  width: calc(100% / 4 - 16px);
  margin-right: 16px;
  margin-bottom: 8px;

  border: 1px solid #dfe1e5;

  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 0px 2px #dfe1e5;
    transition: box-shadow 0.1s ease-in-out;
  }
`;
