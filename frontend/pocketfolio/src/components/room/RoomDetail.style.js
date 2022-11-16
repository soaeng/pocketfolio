import styled from 'styled-components';
import {RiLinksFill} from 'react-icons/ri';

export const Container = styled.div`
  margin-top: 0.6rem;
  padding: 1rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.h4`
  margin-top: 0;
  font-weight: bold;
  margin-bottom: 0.4rem;
  width: 100%;
`;

export const LinkDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

export const IconDiv = styled.div`
  margin-right: 0.3rem;
`;

export const LinkIcon = styled(RiLinksFill)``;

export const Link = styled.a`
  text-decoration: none;
  color: #333333;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const LinkText = styled.p``;

export const Introduction = styled.pre`
  margin: 0;
  width: 100%;
  font-size: 0.9rem;
`;

export const ExtraContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;

  /* &::before {
    background-color: #e75452;
    border-radius: 0.25rem;
    content: '';
    display: block;
    height: 0.25rem;
    width: 50px;
    margin-bottom: 0.5rem;
  } */
`;

export const ExtraItem = styled.div`
  width: calc(100% - 0.6rem);
  padding: 0.3rem;
  aspect-ratio: 4/5;
  background-color: aquamarine;
`;

export const ImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
