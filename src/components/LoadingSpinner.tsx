import React from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";

const Wrapper = styled.div`
  text-align: center;
  padding: 4px;
`;

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <BeatLoader />
    </Wrapper>
  );
};
