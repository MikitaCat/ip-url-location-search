import styled from "@emotion/styled";
import React from "react";

export const DataDisplayBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
