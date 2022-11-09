// styled Component
import styled from 'styled-components';

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
export const NavSearchInput = styled.input`
  width: 30%;
  min-width: 200px;
  height: 22px;
  border-radius: 16px;
  border: 1px solid #bbb;
  padding: 6px 0 6px 20px;

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

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

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
