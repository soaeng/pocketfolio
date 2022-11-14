import styled from 'styled-components';
import {
  RiCloseFill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

export const Container = styled.div`
  position: relative;
`;

export const SideContainer = styled.div`
  width: 36rem;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: #ffffff;
  transition: all 0.3s;
  display: none;

  &.open {
    transition: all 0.5s;
    display: block;
  }

  &.edit {
    display: block;
  }

  @media screen and (max-width: 1200px) {
    width: calc(100vw - 3rem);
    padding: 1.5rem;
    background-color: #ffffff;
    display: none;

    transition: all 0.3s;

    &.open {
      transition: all 0.5s;
      display: block;
    }
  }
`;

export const CloseBox = styled.div`
  font-size: 1.5rem;
`;

export const CloseIcon = styled(RiCloseFill)``;

export const ToggleBox = styled.div`
  position: absolute;
  top: calc(50% - 3rem);
  left: -2.5rem;

  width: 2.5rem;
  height: 6rem;

  border-radius: 2rem 0 0 2rem;
  background-color: #e75452;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    position: absolute;
    left: calc(50% - 3rem);
    top: -2.5rem;

    height: 2.5rem;
    width: 6rem;

    border-radius: 2rem 2rem 0 0;
  }

  &:hover {
    background-color: #d5403d;

    & > * {
      scale: 1.1;
    }
  }
`;

export const ToggleIconBox = styled.div`
  font-size: 1.6rem;
  width: fit-content;
  aspect-ratio: 1 / 1;
`;

export const ToggleCloseIcon1 = styled(RiArrowRightSLine)`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ToggleOpenIcon1 = styled(RiArrowLeftSLine)`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ToggleCloseIcon2 = styled(RiArrowDownSLine)`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ToggleOpenIcon2 = styled(RiArrowUpSLine)`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
