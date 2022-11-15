import styled from 'styled-components';
import {
  RiUserFollowFill,
  RiUserAddLine,
  RiHeart3Line,
  RiHeart3Fill,
  RiEyeLine,
} from 'react-icons/ri';

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 1.5rem;
  left: calc(50% - 33rem / 2);
  width: 33rem;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  /* border: 1px solid #333333; */
  background: rgb(255, 255, 255, 0.85);
  box-shadow: 0 0 2px 2px #eeeeee;
  color: #333333;
  cursor: default;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 75%;
    top: 5rem;
    left: 10%;
  }

  &.sidebar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    &.sidebar {
      display: block;
    }
  }

  @media screen and (max-height: 750px) {
    &.sidebar {
      display: none;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const RoomImgBox = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  overflow: hidden;
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameCategoryDiv = styled.div`
  max-width: 21rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RoomName = styled.h4`
  margin: 0;
`;

export const RoomCategory = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;

export const LikeShowFollowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconDiv = styled.div`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;

  &.follow {
    margin-right: 0.7rem;
  }
`;

export const FollowIcon = styled(RiUserAddLine)`
  width: 100%;
  height: 100%;
`;

export const AlreadyFollowIcon = styled(RiUserFollowFill)`
  width: 100%;
  height: 100%;
`;

export const LikeShowDiv = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-left: 0.5rem;
  }
`;

export const LikeIcon = styled(RiHeart3Fill)`
  width: 100%;
  height: 100%;
`;

export const DislikeIcon = styled(RiHeart3Line)`
  width: 100%;
  height: 100%;
`;

export const ShowIcon = styled(RiEyeLine)`
  width: 100%;
  height: 100%;
  cursor: default;
`;

export const ShowState = styled.p`
  margin: 0;
  margin-left: 0.2rem;
  padding-bottom: 0.1rem;
`;