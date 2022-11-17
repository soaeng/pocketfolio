import styled from 'styled-components';
import {RiFileDownloadLine, RiDownloadLine} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 1.5rem);
  color: #333333;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #959595;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d5d5d5;
    border-radius: 5px;
  }
`;

export const Header = styled.div`
  padding: 0.5rem 0.7rem;
  width: calc(100% - 1.4rem);
  border-bottom: 1.5px solid #a3a3a3;
`;

export const Title = styled.h2`
  width: 100%;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserDiv = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImgBox = styled.div`
  width: 1.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  font-size: 0.9rem;
`;

export const Date = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const ContentDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const FileContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

export const IconDiv = styled.div`
  font-size: 1rem;
  height: 1rem;
  aspect-ratio: 1/1;
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

  &+& {
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
`

export const Tag = styled.p`
  background-color: #ffe4de;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.85rem;

  &+& {
    margin-left: 0.5rem;
  }

`