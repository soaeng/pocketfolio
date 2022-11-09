import styled from 'styled-components';
import {RiHashtag, RiFileAddLine, RiAddCircleLine, RiCloseLine} from 'react-icons/ri';

import {FaSlackHash} from 'react-icons/fa';

export const Background = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 300px;
    background-color: white;
    border: 0.5px solid #bababa;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      height: 5%;
      background-color: #3c2e9b;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #d7dcff;
      border-radius: 2rem;
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
  margin-top: 3rem;
  width: 60%;
  /* height: 75%; */
`;

export const Header = styled.div`
  display: flex;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;

  &.attachLabel{
    margin: 0;
  }
`;

export const ContentDiv = styled.div`
  &.bottom   {
    display: flex;
  }
  margin-bottom: 1.5rem;
`;

export const Title = styled.input`
  width: 98%;
  height: 2rem;
  font-size: 1rem;
  border: 0.5px solid #bababa;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Img = styled.img`
  &.pencil {
    width: 30px;
    height: 29px;
    padding: 11px;
    background-color: #d9d9d9;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &.hashtag {
    width: 30px;
    height: 29px;
  }
`;


export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
`;

export const HashInput = styled.input`
  width: auto;
  line-height: 2rem;
  min-width: 8rem;
  border: none;
  border-bottom: 1px solid;
`;

export const HashList = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const HashOutter = styled.div`
  background: #ffeee7;
  border-radius: 0.5rem;
  padding: 8px 12px;
  color: #ff6e35;
  display: flex;
  font-weight: bold;
  font-size: 1rem;
  line-height: 20px;
  margin-right: 5px;
  cursor: pointer;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
`;

export const StyledBtn = styled.button`
  :hover{
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  }
  p {
    margin: 0;
  }
  &.cancel {
    width: 6rem;
    height: 2.8rem;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #2c2365;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
  }

  &.save {
    width: 6rem;
    height: 2.8rem;
    margin-left: 1rem;
    background-color: #2c2365;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #ffffff;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const HashIcon = styled(FaSlackHash)`
  width: 35px;
  height: 35px;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

export const FileIcon = styled(RiFileAddLine)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const IconDiv = styled.div`
  &.file{
   display: flex;
   align-items : center;
   
   /* margin-bottom: 0.5rem; */
  }
`;

export const ItemList = styled.div`
  height: 5rem;
  width: 90%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3c2e9b;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #d7dcff;
    border-radius: 2rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Cancel = styled(RiCloseLine)`
  cursor: pointer;
`;

export const Add = styled(RiAddCircleLine)`
  font-size: 25px;
  color: #e75452;
  /* margin-bottom: 0.5rem; */
  cursor: pointer;
`