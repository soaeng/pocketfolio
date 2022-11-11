import styled from 'styled-components';
import {
  RiPencilLine,
  RiFilePpt2Fill,
  RiChatSmile2Fill,
  RiShip2Fill,
  RiLinksFill,
} from 'react-icons/ri';

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  z-index: 3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e75452;
  border: none;
  cursor: pointer;

  transition: all 0.4s;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.is-active {
    background-color: #fff;

    &&:hover {
      background-color: #e7545265;
    }
  }

  &.is-active .bar:nth-child(1) {
    transform: translateY(7.3px) rotate(45deg);
    background-color: #e75452;
  }

  &.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  &.is-active .bar:nth-child(3) {
    transform: translateY(-7.3px) rotate(-45deg);
    background-color: #e75452;
  }
`;

export const Bar = styled.span`
  width: 22px;
  height: 2.5px;
  background-color: #fff;
  border-radius: 2px;
  display: block;

  transition: all 0.3s ease-in-out;

  & + & {
    margin-top: 5px;
  }
`;

export const MenuDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #e75452;
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;

  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  visibility: hidden;

  & + & {
    margin-top: 0.7rem;
  }

  &:hover {
    background-color: #fff4f1;
    color: #e75452;

    .tooltip {
      visibility: visible;
    }
  }

  &.edit {
    visibility: visible;
    bottom: calc(7.9rem + 200px);
  }

  &.port {
    visibility: visible;
    bottom: calc(7.2rem + 150px);
  }

  &.visit {
    visibility: visible;
    bottom: calc(6.5rem + 100px);
  }

  &.wave {
    visibility: visible;
    bottom: calc(5.7rem + 50px);
  }

  &.share {
    visibility: visible;
    bottom: 5rem;
  }
`;

export const EditIcon = styled(RiPencilLine)``;

export const PortIcon = styled(RiFilePpt2Fill)``;

export const VisitIcon = styled(RiChatSmile2Fill)``;

export const WaveIcon = styled(RiShip2Fill)``;

export const ShareIcon = styled(RiLinksFill)``;

export const ToolTip = styled.span`
  position: absolute;
  bottom: 0.7rem;
  right: 4rem;
  visibility: hidden;
  width: 150px;
  transition: all 0.1s;
  display: flex;
  flex-direction: row-reverse;
`;

export const ToolTipText = styled.p`
  width: fit-content;
  margin: 0;
  font-size: 1rem;
  background-color: #e75452;
  color: #fff;
  border-radius: 6px;
  padding: 4px 6px;
`;