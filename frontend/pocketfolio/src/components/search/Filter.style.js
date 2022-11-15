// styled Component
import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 150px;
  height: 35px;
  border-radius: 4px;
  border: 2px solid lightcoral;
  background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png')
    calc(100% - 7px) center no-repeat;
  background-size: 20px;
  cursor: pointer;

  ::after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 35px;
    background: lightcoral;
  }
  .label {
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    padding-left: 15px;
    background: transparent;
    cursor: pointer;
  }
  .optionList {
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    background: lightcoral;
    color: #fff;
    list-style-type: none;
    padding: 0;
    border-radius: 6px;
    overflow: hidden;
    max-height: 0;
    transition: 0.3s ease-in;
  }
`;
