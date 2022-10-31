// styled Component
import styled from 'styled-components';

// Navbar
export const NavContainer = styled.div`
  position: fixed;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 3.5rem;
  width: 100%;
  z-index: 999;
`;

// Logo Img
export const NavLogoImg = styled.img`
  left: 1.5rem;
  top: 1.5rem;
  height: 100%;
  cursor: pointer;
`;

// Nav Search
export const NavSearchInput = styled.input`
  width: 30%;
  min-width: 200px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #bbb;
  padding: 6px 0 6px 0;

  &::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 10px center;
    background-repeat: no-repeat;
    padding-left: 40px;
  }

  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
`;

// Nav Button
export const NavBotton = styled.button`
  padding: 0.5rem 1rem;
  margin: 15px;
  border-radius: 16px;
  border: none;
  background-color: #3c2e9b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #35297e;
  }

  &:active {
    background-color: #35297e;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;

// LoginDiv
export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
`;
