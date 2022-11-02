import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  /* justify-content: center; */
  /* padding-top: 5rem; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;

  flex-direction: column;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: 900px;
`;

export const Header = styled.div`
  display: flex;
  font-size: 36px;
  /* border-bottom: 2px solid; */
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
  width: 30px;
  height: 30px;
  padding: 11px;
  background-color: #d9d9d9;
  border-radius: 0.5rem 0 0 0.5rem;
`;
