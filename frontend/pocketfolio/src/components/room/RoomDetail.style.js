import styled from 'styled-components';
import {RiLinksFill, RiEyeLine, RiHeart3Fill} from 'react-icons/ri';

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
`;

export const ExtraItem = styled.div`
  width: calc(100% - 0.8rem);
  padding: 0.4rem;
  aspect-ratio: 4/5;
  background-color: #f3a9a1;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: #de938b;
  }

  &:hover > div {
    box-shadow: 0px 0px 100px rgba(120, 120, 120, 0.8) inset,
      0px 0px 100px rgba(201, 200, 200, 0.5);
    transition: all 0.1s;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #ffffff;
  border-radius: 0.3rem;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LikeHitBox = styled.div`
  position: absolute;
  right: 5px;
  bottom: 3px;

  display: flex;
  align-items: center;
  color: white;
`;

export const LikeHitIconDiv = styled.div`
  margin: 0 0.2rem;
  height: 1rem;
  aspect-ratio: 1/1;
  font-size: 1rem;
`;

export const HitIcon = styled(RiEyeLine)``;

export const LikeIcon = styled(RiHeart3Fill)``;

export const HitLikeCount = styled.p`
  margin: 0;
`

export const ExtraName = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  margin-top: 0.8rem;
  color: white;
`;
