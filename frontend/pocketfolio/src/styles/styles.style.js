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

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const H2 = styled.h2`
  // xl(4k, ≥2100px)
  font-size: 4rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 3rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 2.5rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const H3 = styled.h3`
  // xl(4k, ≥2100px)
  font-size: 4rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 1.8rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 1.5rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1.25rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Body1 = styled.p`
  // xl(4k, ≥2100px)
  font-size: 1.7rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 1.5rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 1.3rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.75em;
  }
`;

const Body2 = styled.p`
  // xl(4k, ≥2100px)
  font-size: 2rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 1rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 0.9rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

const Body3 = styled.p`
  // xl(4k, ≥2100px)
  font-size: 1.5rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 1rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 0.75rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 0.5rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.35rem;
  }
`;

const Body4 = styled.p`
  // xl(4k, ≥2100px)
  font-size: 1rem;

  // lg(FHD <2100px)
  @media screen and (max-width: 2100px) {
    font-size: 0.75rem;
  }

  // md(HD, <1500px)
  @media screen and (max-width: 1500px) {
    font-size: 0.5rem;
  }

  // sm(태블릿, <900px)
  @media screen and (max-width: 900px) {
    font-size: 0.35rem;
  }

  // xs(모바일, <600px)
  @media screen and (max-width: 600px) {
    font-size: 0.25rem;
  }
`;
export {H1, H2, H3, Body1, Body2, Body3, Body4};
