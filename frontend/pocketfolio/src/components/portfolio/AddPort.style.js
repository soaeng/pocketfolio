import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  flex-direction: column;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    height: 400px;
    background-color: white;
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
  margin-top: 3rem;
  width: 60%;
  height: 70%;
`;

export const Header = styled.div`
  display: flex;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
`;

export const TitleDiv = styled.div`
  display: flex;
`;

export const Title = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  border: 0.5px solid #bababa;
  border-radius: 0 0.5rem 0.5rem 0;
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

export const HashDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
`;

export const HashInput = styled.input`
  width: auto;
  background-color: #f7f7f7;
  line-height: 2rem;
  min-width: 8rem;
  border: none;
  border-bottom: 1px solid;
`;

export const HashList = styled.div`
  display: flex;
  width: 50rem;
  margin-top: 1rem;
`;

export const HashOutter = styled.div`
  background: #ffeee7;
  border-radius: 56px;
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
