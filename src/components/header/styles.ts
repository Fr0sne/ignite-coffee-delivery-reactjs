import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.0625rem 0;

  @media (max-width: 720px) {
    display: flex;
    justify-content: space-between;

    div {
      margin: 0;
    }
    img {
      margin-left: 2rem;
    }
    div + div {
      margin-right: 2rem;
    }
  }
`;

export const LocationButton = styled.button`
  background-color: var(--purple-light);
  color: var(--purple-dark);
  border-radius: 6px;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.825rem;
  font-weight: 400;
  display: flex;
  float: right;
`;

export const CartButton = styled.button`
  background-color: var(--yellow-light);
  color: var(--purple-dark);
  border-radius: 6px;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.825rem;
  font-weight: 400;
  display: flex;
  float: right;
  margin-left: 0.75rem;

  svg {
    color: var(--yellow-dark);
  }
`;

export const LocationButtonContent = styled.div`
  display: flex;
  margin: 0 0.25rem;
  svg {
    margin: 0 0.25rem 0 0;
    line-height: 0;
  }
`;
export const ButtonContainer = styled.div`
  margin: auto 10rem auto 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: 10rem;
  img {
    height: 2.5rem;
  }
`;
