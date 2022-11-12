import styled from 'styled-components';
import {H2, Body1} from '../../styles/styles.style';
import {TbEdit, TbList, TbFiles} from 'react-icons/tb';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  width: 80vw;

  .ck-content {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 70%;
  padding-left: 2rem;
`;

export const TitleDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #b9b9b9;
  justify-content: space-between;
`;
export const Title = styled(H2)`
  display: flex;
  align-items: flex-end;
  margin: 0;
`;

export const Summary = styled(Body1)`
  height: fit-content;
  padding-top: 1rem;
  width: 100%;
  overflow: auto;
`;

export const WriteDate = styled.p`
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

export const ThumbDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 40%;
  padding-top: 3rem;
  overflow: hidden;
`;
export const ThumbNail = styled.img`
  max-width: 100%;
  height: auto;
`;

export const HashDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  width: 50%;
  flex-wrap: wrap;
`;

export const Hash = styled.div`
  padding: 10px;
  margin-right: 1rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: #0091f7;
  color: #fff;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin-bottom: 1rem;
`;

export const IconDiv = styled.div`
  display: flex;
`;

export const IconWrap = styled.div`
  position: relative;
  transition: all 0.3s;
  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

export const EditIcon = styled(TbEdit)`
  font-size: 50px;
  width: 70px;
  transition: all 0.3s;
  color: #f3a9a1;
  &:hover {
    color: #df7d72;
    font-size: 53px;
  }
  cursor: pointer;
`;

export const PortIcon = styled(TbList)`
  font-size: 50px;
  width: 70px;
  transition: all 0.3s;
  color: #f3a9a1;
  &:hover {
    font-size: 52px;
    color: #df7d72;
    .tooltip {
      visibility: visible;
    }
  }
  cursor: pointer;
`;

export const AttachDiv = styled.div`
  display: flex;
`;

export const AttachList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const Attach = styled.a`
  text-decoration: none;
  color: black;
  width: 5rem;
  margin-right: 0.5rem;
  background-color: #ffc3c3;
  padding: 10px;
  border-radius: 0.5rem;
  font-family: 'NanumSquareAcr' !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    padding: 12px;
  }
`;

export const AttachIcon = styled(TbFiles)`
  font-size: 50px;
  color: #ffc3c3;
`;

export const ToolTip = styled.span`
  position: absolute;
  bottom: 3.5rem;
  left: -3.2rem;
  visibility: hidden;
  width: 150px;
  display: flex;
  flex-direction: row-reverse;

  &:hover {
  }
`;

export const ToolTipText = styled.p`
  width: fit-content;
  margin: 0;
  font-size: 1rem;
  background-color: #f8af87;
  color: #fff;
  border-radius: 6px;
  padding: 4px 6px;
`;
