import styled from "styled-components";

export const ConfirmedContainer = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  padding: 10rem 15rem;
  h1 {
    font-family: "Baloo 2";
    color: var(--yellow-dark);
  }
  h4 {
    font-family: "Roboto", sans-serif;
    color: var(--base-subtitle);
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }
  img {
    /* margin-top: auto; */
  }
  @media (max-width: 720px) {
    padding: 0;
    flex-wrap: wrap;
    width: 100% !important;
  }
`;

export const ConfirmedOrderDetails = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px 40px;
  border: solid 2px var(--purple);
  padding: 0 2rem;
  box-sizing: border-box;

  div {
    /* margin: 4rem 0; */
  }
  span {
    display: block;
    color: var(--base-text);
  }
  @media (max-width: 720px) {
  }
`;
export const ConfirmedInfoContainer = styled.div`
  width: 50%;
  height: 50%;

  @media (max-width: 720px) {
    width: 90%;
    margin: auto;
  }
`;

export const ConfirmedIcons = styled.div`
  background-color: var(--yellow-light);
  color: var(--purple-dark);
  border-radius: 6px;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.825rem;
  font-weight: 400;
  display: flex;
  width: 1rem;
  height: 1rem;
  /* float: right;   */
  margin-left: 0.75rem;

  svg {
    color: var(--yellow-dark);
  }
`;

export const ConfirmedItemDetail = styled.div<{ backgroundColor?: string }>`
  padding: 0;
  margin: 4rem 0;
  display: flex;
  flex-flow: wrap;
  color: var(--base-text);
  align-items: center;
  svg {
    background-color: ${(props) => props.backgroundColor ?? ""};
    padding: 0.75rem;
    margin-right: 0.5rem;
    border-radius: 9999px;
  }
  span {
    display: block;
  }
`;
