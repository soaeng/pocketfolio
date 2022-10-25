import styled from 'styled-components';

const H1 = styled.h1`
  // xl(4k, ≥2100px)
  font-size: 8rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 5rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 3rem;
  }

  // sm(모바일, <900px)
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  // sm(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const H2 = styled.h2`
  // xl(4k, ≥2100px)
  font-size: 6rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 4rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 2.5rem;
  }

  // sm(모바일, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  // sm(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const H3 = styled.h3`
  // xl(4k, ≥2100px)
  font-size: 4rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 3rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 2rem;
  }

  // sm(모바일, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1.25rem;
  }

  // sm(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Body1 = styled.body`
  // xl(4k, ≥2100px)
  font-size: 3rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 2rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 1.5rem;
  }

  // sm(모바일, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }

  // sm(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.75em;
  }
`;

const Body2 = styled.p`
  // xl(4k, ≥2100px)
  font-size: 2rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 1.5rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 1rem;
  }

  // sm(모바일, <900px)
  @media screen and (max-width: 900px) {
    font-size: 0.75rem;
  }

  // sm(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
export {H1, H2, H3, Body1, Body2};
