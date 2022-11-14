import styled from 'styled-components';
import {RiLinksFill} from 'react-icons/ri';

export const Container = styled.div`
  margin-top: 0.6rem;
  padding: 1rem 0 0.5rem 0;
`;


export const UserName = styled.h4`
  margin-top: 0;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;


export const LinkDiv = styled.div`
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

export const LinkText = styled.p`
`

export const Introduction = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
