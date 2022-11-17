import styled from 'styled-components';
import {
  RiCloseFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiCheckboxBlankLine,
  RiCheckboxFill,
} from 'react-icons/ri';

export const Container = styled.div`
  position: relative;
  color: #333333;
  width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 35rem) {
    width: 85vw;
  }
`;

export const CancelBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.7rem;
  aspect-ratio: 1/1;
`;

export const CancelIcon = styled(RiCloseFill)`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  margin-right: 2rem;
  width: 100%;
  text-align: center;
`;

export const DivContainer = styled.div`
  width: 20.3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &.open {
    align-items: flex-start;
  }

  &.save {
    /* justify-content: end; */
  }

  &.tf {
    width: fit-content;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const Name = styled.h4`
  margin: 0.6rem 0;
  margin-right: 1rem;

  &.privacy {
    margin-left: 2rem;
  }
`;

export const NameInput = styled.input`
  padding: 0.7rem;
  border: 2px solid #ffe4de;
  border-radius: 0.3rem;
  width: 14rem;
  font-size: 1rem;

  @media screen and (max-width: 35rem) {
    width: 70%;
  }

  &:focus {
    outline: none;
    border-color: #f6b9ab;
  }
`;

export const SelectBox = styled.div`
  padding: 0.7rem;
  border: 2px solid #ffe4de;
  border-radius: 0.3rem;
  position: relative;
  width: 14rem;

  &.open {
    border-color: #f6b9ab;
  }
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.open {
    padding-bottom: 0.7rem;
    border-bottom: 2px solid #f6b9ab;
    margin-bottom: 0.7rem;
  }
`;

export const SelectOption = styled.div`
  display: block;
  width: 9rem;

  & + & {
    padding-top: 0.7rem;
  }

  &.close {
    display: none;
  }

  &:hover {
    font-weight: bold;
  }

  &.selected {
    font-weight: initial;
  }
`;

export const IconDiv = styled.div`
  font-size: 1.2rem;
  height: 1.2rem;
`;

export const ShowIcon = styled(RiArrowDownSFill)``;
export const NoshowIcon = styled(RiArrowUpSFill)``;

export const TFBox = styled.div`
  font-size: 1.4rem;
  height: 1.4rem;
`;

export const TIcon = styled(RiCheckboxFill)`
  color: #f6b9ab;
`;
export const FIcon = styled(RiCheckboxBlankLine)`
  color: #f6b9ab;
`;

export const Btn = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: #f6b9ab;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #da9d8f;
    color: #e3e2e2;
  }
`;