import styled from 'styled-components';
import {RiCloseFill} from 'react-icons/ri';
import {Tb3DRotate} from 'react-icons/tb';
import {FiEdit2} from 'react-icons/fi';

export const DelIcon = styled(RiCloseFill)`
  padding: 0.3rem;
  border-radius: 50%;
  background-color: #F93168;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
export const EditIcon = styled(FiEdit2)`
  padding: 0.3rem;
  border-radius: 50%;
  background-color: #378DE1;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
export const RotateIcon = styled(Tb3DRotate)`
  padding: 0.3rem;
  border-radius: 50%;
  background-color: #7AD49A;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  width: 10rem;
  justify-content: space-between;
  font-size: 2rem;
`;
