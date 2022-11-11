// styled Component
import styled from 'styled-components';

import {AiOutlineSearch} from 'react-icons/ai';

// Navbar
export const NavContainer = styled.div`
  position: sticky;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 3.5rem;
  width: calc(100% - 1rem);
  z-index: 999;
  top: 0;
`;

// Logo Img
export const NavLogoImg = styled.img`
  left: 1.5rem;
  top: 1.5rem;
  height: 100%;
  cursor: pointer;
`;

// Nav Search
export const NavSearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #bbb;
  width: 40%;
  min-width: 200px;
  padding: 5px 30px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavSearchInput = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  padding: 0 10px;
  font-size: 15px;

  &::placeholder {
    font-size: 15px;
  }

  &:focus {
    border: none;
    outline: none;
    padding: 0 10px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavSearchIcon = styled(AiOutlineSearch)``;

// Nav Button
export const NavBotton = styled.button`
  padding: 0.5rem 1rem;
  margin: 15px;
  border-radius: 16px;
  border: none;
  background-color: #e75452;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ff6b69;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: #ff6b69;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;

// LoginDiv
export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserName = styled.p`
  padding-right: 10px;
`;
