import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: auto 50% auto;
  column-gap: 1rem;
  justify-items: center;
  justify-content: center;
  img {
    margin: auto;
  }
`;

export const CheckoutItemSubtotal = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: var(--base-text);
  text-align: right;
`;
export const CheckoutDetailsContainer = styled.div`
  /* padding: 0 2.5rem; */
  /* @media (max-with: 720px) {
    padding: 0.5rem;
  } */
`;
export const CheckoutItemDetails = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 0.5rem 0.25rem;
  h5 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-subtitle);
  }
`;
