import styled from "styled-components";

export const CheckoutContainer = styled.div`
  height: 100vh;
  padding: 0 10%;
  font-family: "Robot", sans-serif;
  display: flex;
  justify-content: space-between;
  column-gap: 4rem;
  @media (max-width: 720px) {
    display: block;
    padding: 0 1rem;
    justify-content: initial;
    gap: 0;
  }
`;
export const CheckoutLocationAndPaymentContainer = styled.div`
  width: 100%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const CheckoutCartItemsContainer = styled.div`
  width: 70%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const CheckoutItems = styled.div`
  /* background-color: var(--base-card); */
  width: 100%;
  margin: 1rem 0;
  border-radius: 6px 44px;
  background-color: var(--base-card);
  outline: solid 1px var(--base-button);
  border-radius: 6px 44px;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CheckoutTitle = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
`;
export const CheckoutLocationContainer = styled.div`
  width: 40rem;
  /* height: 23.25rem; */
  background-color: var(--base-card);
  outline: solid 1px var(--base-button);
  /* box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3); */
  border-radius: 6px;
  padding: 2.5rem;
  margin: 1rem 0;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0;
    padding-bottom: 1rem;
  }
`;
export const CheckoutPaymentInfoTitle = styled.div`
  line-height: 130%;
  font-weight: 500;
  margin: 1rem 0;
  h5 {
    font-size: 1rem;
    color: var(--base-subtitle);
  }
  h6 {
    font-size: 0.825rem;
    color: var(--base-text);
  }
  @media (max-width: 720px) {
    margin: 1rem 0;
  }
`;
export const CheckoutPaymentButton = styled.button<{ selected?: boolean }>`
  border: 0;
  outline: 0;
  height: 3.1875rem;
  border-radius: 6px;
  display: flex;
  background-color: var(--base-button);
  color: var(--base-text);
  text-transform: uppercase;
  align-items: center;
  font-size: 0.75rem;
  outline: transparent;
  transition: all 0.4s;
  ${(props) =>
    props.selected
      ? "outline: solid 1px var(--purple); background-color: var(--purple-light);"
      : ""}
  div {
    height: 100%;
    width: 3.1875rem;
    display: flex;
    justify-content: center;
  }
  svg {
    color: var(--purple);
    margin: auto;
    font-size: 1rem;
  }
`;
export const CheckoutForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 1rem;
  @media (max-width: 720px) {
    /* display: inline-block; */
    row-gap: 0;
    grid-template-rows: auto;
    input {
      margin-bottom: 1rem;
    }
  }
`;

interface ICheckoutLocationInput {
  inputWidth?: string | number;
}

export const CheckoutLocationInput = styled.input<ICheckoutLocationInput>`
  background-color: var(--base-input);
  color: var(--base-text);
  border: 0;
  outline: solid var(--base-button) 1px;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0 0.75rem;
  ${(props) => (props.inputWidth ? "width: " + props.inputWidth + ";" : "")}
  @media (max-width: 720px) {
    /* width: 20px; */
    margin: 0 1rem;
  }
`;

interface ICheckoutGrid {
  columns?: number;
  gap?: string | number;
  customTemplate?: string;
  forceLayout?: boolean;
}
/* ${(props) => "grid-template-columns: " + "1fr ".repeat(props.columns) + ";"}; */
export const CheckoutGrid = styled.div<ICheckoutGrid>`
  display: grid;
  grid-template-columns: ${(props) => props.customTemplate || "1fr"};
  column-gap: ${(props) => props.gap || 0};
  @media (max-width: 720px) {
    ${(props) =>
      !props.forceLayout ? "grid-template-columns: 1fr; gap: 0;" : ""}
  }
`;

export const CheckoutLocationTitleSection = styled.div`
  margin: 1rem 0 2rem;
  * {
    font-family: "Roboto";
    line-height: 130%;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    color: var(--base-subtitle);
  }
  h5 {
    font-size: 0.875rem;
    color: var(--base-text);
  }
  @media (max-width: 720px) {
    padding: 1rem;
  }
`;

export const CheckoutPaymentContainer = styled.div`
  width: 40rem;
  /* height: 23.25rem; */
  background-color: var(--base-card);
  outline: solid 1px var(--base-button);
  border-radius: 6px;
  padding: 2.5rem;
  margin: 1rem 0;
  @media (max-width: 720px) {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
  }
`;

export const CheckoutPriceDetails = styled.div`
  margin: 1rem 0;
  color: var(--base-subtitle);
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  h4 {
    color: var(--base-text);
    font-size: 0.875rem;
  }
`;

export const CheckoutConfirmButton = styled.button`
  background-color: var(--yellow);
  width: 100%;
  color: var(--white);
  padding: 1rem 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.5s;
  :hover {
    background-color: var(--yellow-dark);
  }
`;
