import styled from 'styled-components';
import {H2} from '../../styles/styles.style';
import {TbEdit} from 'react-icons/tb';
import {
  RiFileDownloadLine,
  RiDownloadLine,
  RiArrowLeftLine,
} from 'react-icons/ri';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  width: 80vw;
`;

export const Content = styled.div`
  width: 70%;
  height: fit-content;
  padding: 2.5rem;
  border-radius: 10px;
  outline: 4px solid #facbcb;
  margin-bottom: 3rem;
`;

export const Header = styled.div`
  border-bottom: 1px solid #b9b9b9;
`;
export const ContentDiv = styled.div`
  position: relative;
  width: 100%;
`;
export const Summary = styled.div`
  figure img {
    display: block;
    margin: 0.9em auto;
    min-width: 50px;
    text-align: center;
    max-width: 100%;
    min-width: 100%;
  }
  .image_resized {
    margin-left: auto;
    margin-right: auto;
  }
  .image-style-block-align-left {
    margin-right: auto;
    margin-left: 0;
  }
  .image-style-block-align-right {
    margin-left: auto;
    margin-right: 0;
  }
  .image-style-align-left {
    float: left;
    margin-right: 1.5rem;
  }
  .image-style-align-right {
    float: right;
    margin-left: 1.5rem;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(H2)`
  display: flex;
  align-items: flex-end;
  margin: 0;
  font-size: 1.5rem;
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WriteDate = styled.p`
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

export const IconDiv = styled.div`
  display: flex;

  &.edit {
    padding-right: 0.5rem;
  }
`;

export const BackIcon = styled(RiArrowLeftLine)`
  font-size: 1.5rem;
  padding: 0 1rem 1rem 0;
  transition: all 0.2s;
  color: #737373;
  &:hover {
    color: #000000;
  }

  cursor: pointer;
`;

export const EditIcon = styled(TbEdit)`
  font-size: 25px;
  padding-bottom: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;
  color: #f3a9a1;
  &:hover {
    color: #df7d72;
  }
`;

export const FileContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

export const ShowFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  background-color: #f3eed9;
  padding: 0.5rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: #dad4bc;
  }
`;

export const FileIcon = styled(RiFileDownloadLine)``;

export const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-left: 0.1rem;
`;

export const FileList = styled.div`
  margin-top: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 0 2px 2px #eeeeee;
  border-radius: 0.3rem;
  font-size: 0.8rem;
`;

export const FileItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    & .name {
      height: auto;
      word-break: break-all;
    }
  }

  & + & {
    margin-top: 0.3rem;
  }
`;

export const FileName = styled.div`
  width: 8.3rem;
  height: 1rem;
  overflow: hidden;
  margin: 0;
  margin-right: 2px;
`;

export const DownBox = styled.a`
  font-size: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  color: #333333 !important;

  &:hover {
    font-size: 0.85rem;
    color: #b0a992 !important;
  }

  &:active {
    font-size: 0.85rem;
    color: #b0a992 !important;
  }
`;

export const DownIcon = styled(RiDownloadLine)``;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  background-color: #ffe4de;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.85rem;

  & + & {
    margin-left: 0.5rem;
  }
`;
