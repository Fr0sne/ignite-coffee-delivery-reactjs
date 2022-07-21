import styled from "styled-components";

export const QualityItemContainer = styled.div`
  display: flex;
  padding: 0;
  svg {
    background-color: red;
    padding: 0.5rem;
    border-radius: 99999px;
    font-size: 1rem;
    color: var(--white);
    ${(props) => (props.color ? "background-color: " + props.color : "")};
    margin-right: 0.75rem;
  }
`;

export const QualityItemText = styled.h6`
  font-family: "Roboto", sans-serif;
  color: var(--base-title);
  font-weight: 400;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
