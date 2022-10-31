import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
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
  width: 80%;
  height: 900px;

`;



export const Header = styled.div`
  display: flex;
  font-size: 36px;
  border-bottom: 2px solid;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
`
