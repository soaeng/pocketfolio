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
