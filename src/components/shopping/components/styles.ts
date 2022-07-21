import styled from "styled-components";

export const CoffeeCard = styled.div`
  background-color: var(--base-card);
  border-radius: 0 20px 0 20px;
  font-family: "Baloo 2", sans-serif;
  text-align: center;
  box-sizing: initial;
  padding: 0 1.25rem;
  display: grid;
  box-sizing: initial;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  *::selection {
    background: 0;
    /* background-color: 0; */
  }
  img {
    position: relative;
    /* bottom: 1.5rem; */
  }
`;
export const CoffeCardRelative = styled.div`
  position: relative;
  bottom: 1.75rem;
`;
export const CoffeeCardTag = styled.button`
  display: block;
  margin: auto 0.125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  font-size: 0.55rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 700;
`;

export const CoffeeCardTitle = styled.div`
  font-weight: 700;
  color: var(--base-subtitle);
  font-size: 1.25rem;
`;
export const CoffeeCardSubtitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  color: var(--base-label);
`;

export const CoffeeCardFooter = styled.footer`
  margin: 1rem 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const CoffeePrice = styled.span`
  border: none;
  font-size: 1.25rem;
  color: var(--base-text);
  font-weight: 800;
  ::before {
    content: "R$";
    font-size: 0.825rem;
    font-weight: normal;
  }
`;

export const CoffeeQuantity = styled.div`
  background-color: var(--base-button);
  border: 0;
  outline: 0;
  font-family: "Roboto", sans-serif;
  width: 5rem;
  height: 2.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 6px;
  align-items: center;
  div {
    /* margin: auto; */
    /* font-size: 0.725rem; */
    cursor: pointer;
    justify-items: center;
    align-items: center;
    display: flex;
    height: 100%;
    margin: auto;
    /* color: var(--purple); */
  }
  span {
    text-align: center;
  }
`;

export const CheckoutItemController = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const CoffeeRemove = styled.button`
  border-radius: 6px;
  display: inline-block;
  background-color: var(--base-button);
  color: var(--base-text);
  height: 2.375rem;
  /* width: 5.6875rem; */
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-items: center;
  line-height: 0;
  padding: 0.5rem 1rem 0.5rem 0;

  svg {
    color: var(--purple);
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`;
export const CoffeeAddCart = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  background-color: var(--purple-dark);
  transition: all 0.3s;
  :hover {
    background-color: var(--purple);
  }
  svg {
    line-height: 0;
  }
`;

export const CoffeeCheckoutInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  /* width: 200px; */
`;

export const CoffeTagContainer = styled.div``;
