import styled from 'styled-components';
import {RiFileAddLine, RiAddCircleLine, RiCloseLine} from 'react-icons/ri';

import {FaSlackHash} from 'react-icons/fa';

export const Background = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  .ck-content .image.image_resized {
    display: block;
    box-sizing: border-box;
  }

  .ck-content .image.image_resized img {
    width: 100%;
  }

  .ck-content .image.image_resized > figcaption {
    display: block;
  }
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 23rem;
    background-color: white;
    border: 0.5px solid #bababa;
    &::-webkit-scrollbar {
      display: block;
      width: 9px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff9392;
      height: 15px;
      border-radius: 0.2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #ffd8d7;
      border-radius: 0.2rem;
    }
  }

  &.ck-content blockquote {
    overflow: hidden;
    padding-right: 14em;
    padding-left: 1.5em;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    border-left: solid 5px hsl(0, 0%, 80%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2.5rem;
  width: 60%;
`;

export const Header = styled.div`
  display: flex;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
`;

export const Label = styled.div`
  font-weight: bold;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const ContentDiv = styled.div`
  width: 100%;
  &.bottom {
    display: flex;
  }
  margin-bottom: 1.5rem;
`;

export const Title = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  border: 0.5px solid #bababa;
  border-radius: 0.5rem;
  padding-left: 1em;

  :focus {
    outline: 0.5px solid #fcb4b4;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  min-width: 130px;
`;

export const HashInput = styled.input`
  width: auto;
  line-height: 2rem;
  margin-top: 0.7rem;
  border: none;
  border-bottom: 1px solid #b9b9b9;
`;

export const FeedbackText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
  color: #ff4949;
  padding-top: 0.3rem;
`;

export const HashList = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const HashOutter = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 20px;
  padding: 8px 12px;
  margin: 5px;
  margin-left: 0;
  color: #ff6e35;
  background: #ffeee7;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  padding-bottom: 2rem;
`;

export const StyledBtn = styled.button`
  p {
    margin: 0;
    font-size: 1rem;
  }
  &.cancel {
    width: 5rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #e75452;
    font-weight: 700;
    font-size: 10px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    }
  }

  &.save {
    width: 5rem;
    height: 2.5rem;
    margin-left: 1rem;
    background-color: #e75452;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #ffffff;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const HashIcon = styled(FaSlackHash)`
  width: 35px;
  height: 35px;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
`;

export const AttachWrap = styled.div`
  display: flex;
`;

export const FileIcon = styled(RiFileAddLine)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemList = styled.div`
  /* margin-top: 1rem; */
  height: 5rem;
  width: 90%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9392;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffd8d7;
    border-radius: 2rem;
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  margin: 1rem 0 0.5rem 0.15rem;
  width: 10rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  background-color: white;
  box-shadow: 0 0 2px 2px #eeeeee;
  border-radius: 0.3rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px 2px #d1d1d1;

    &.name {
      height: auto;
      word-break: break-all;
    }
  }
  &:active {
    color: #b0a992 !important;
  }
`;

export const FileName = styled.p`
  margin: 0;
  overflow: hidden;
  padding-right: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Cancel = styled(RiCloseLine)`
  position: absolute;
  right: 1%;
  cursor: pointer;
  color: #b0a992;
  &:hover {
    color: #000000 !important;
  }

  &:active {
    color: #b0a992 !important;
  }
`;

export const Add = styled(RiAddCircleLine)`
  padding-left: 1rem;
  color: #fa8f8d;
  transition: all 0.3s;
  &:hover {
    color: #e75452;
  }
  cursor: pointer;
`;
