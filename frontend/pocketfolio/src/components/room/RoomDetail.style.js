import styled from 'styled-components';
import {Body2, Body3, Body4} from '../../styles/styles.style';
import {RiCake2Fill, RiLinksFill, RiArrowUpSLine} from 'react-icons/ri';

export const Container = styled.div`
  padding: 1rem 0 0.5rem 0;
`;

export const UpArrowDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UpIcon = styled(RiArrowUpSLine)``;

export const BirthLinkDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const IconDiv = styled.div`
  margin-right: 0.3rem;
`;

export const BirthIcon = styled(RiCake2Fill)`
  font-size: 1rem;
`;

export const LinkIcon = styled(RiLinksFill)`
  font-size: 1rem;
`;

export const BirthLinkTxt = styled(Body4)`
  margin: 0;
`;

export const Introduction = styled(Body3)`
  margin: 0;
`;
