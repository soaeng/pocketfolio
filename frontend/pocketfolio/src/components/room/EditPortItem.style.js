import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffe4de;
  padding: 1rem;
  border-radius: 0.2rem;

  &.dark {
    background-color: #d2b6b0;
  }

  & + & {
    margin-top: 0.7rem;
  }
`;

export const Name = styled.p`
  margin: 0;
  width: calc(100% - 5rem);
  word-break: break-all;
  word-wrap: break-word;
`;

export const Btn = styled.button`
  background-color: #e75452;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  color: #eee;

  &.none {
    display: none;
  }

  &:hover {
    background-color: #c74240;
  }
`;