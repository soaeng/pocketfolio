import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  position: fixed;
  color: #333333;

  &.open {
    display: block;

    top: 0;
    left: 0;
  }
`;

export const Title = styled.h3`
  font-family: 'NanumSquareExtraBold';
  margin-top: 0;
`;

export const Msg = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;

export const BtnBox = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Btn = styled.button`
  background-color: white;
  border: 1.2px solid #e75452;
  color: #e75452;
  padding: 0.4rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: #dddddd;
  }

  &.ok {
    background-color: #e75452;
    color: white;
    border: 1.2px solid #e75452;

    &:hover {
      background-color: #c13136;
      border: 1.2px solid #c13136;
      color: #dddddd;
    }
  }

  & + & {
    margin-left: 0.3rem;
  }
`;

