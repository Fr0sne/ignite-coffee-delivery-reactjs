import styled from "styled-components";

export const CoffeeShoppingBody = styled.div`
  /* width: 75%; */
  /* margin: 0 10rem; // alterar */
  padding: 10rem;
  @media (max-width: 720px) {
    padding: 3rem;
  }
`;

export const CoffeeShoppingTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 3.375rem;
`;

export const CoffeeBuyContainer = styled.div`
  /* height: 19.375rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  margin: auto;
  row-gap: 2.5rem;

  @media (max-width: 1833px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1580px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1063px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 805px) {
    grid-template-columns: 100%;
    padding: 0 7.25%;
  }
`;
