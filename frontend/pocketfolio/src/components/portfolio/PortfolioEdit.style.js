import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

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
