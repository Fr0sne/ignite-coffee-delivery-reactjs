import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 36rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    display: block;
    & > div {
    }
  }
`;

export const BlurredBanner = styled.div`
  width: 100%;
  height: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0.5;
  filter: blur(160px);
`;

export const BannerFirstContainer = styled.div`
  margin-left: 17.5%;
  margin-top: 6rem;
  width: 36.75rem;
  img {
    display: none;
  }
  @media (max-width: 720px) {
    margin: 0;
    width: 90%;
    margin: auto;
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 85%;
      margin: auto;
    }
  }
`;

export const BannerSecondContainer = styled.div`
  margin-right: 17.5%;
  display: flex;
  justify-items: center;
  align-items: center;
  align-content: center;
  img {
    width: 100%;
  }
  @media (max-width: 720px) {
    img {
      display: none;
    }
  }
`;

export const BannerTitleContainer = styled.div`
  font-family: "Baloo 2";
  font-size: 3rem;
  font-weight: 800;
  color: var(--base-title);
  line-height: 130%;
  @media (max-width: 720px) {
    text-align: center;
    width: 100%;
    font-size: 2.25rem;
    line-height: 100%;
  }
`;

export const BannerSubTitle = styled.div`
  font-size: 1.25rem;
  line-height: 130%;
  font-family: "Roboto";
  color: var(--base-subtitle);
  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const BannerQualityContainer = styled.div`
  display: grid;
  margin-top: 4.125rem;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  @media (max-width: 720px) {
    display: block;
    margin-top: 0;
    div {
      margin: 1rem 0;
    }
  }
`;
