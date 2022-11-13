import styled from 'styled-components';


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