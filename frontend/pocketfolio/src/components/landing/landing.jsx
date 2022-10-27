import {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Frame, Outer, Divider, Content1, Title} from './landing.style';
import {Button} from '../common/Button';

const DIVIDER_HEIGHT = 5;

const Landing = () => {
  const outerDivRef = useRef();
  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  const wheelHandler = e => {
    e.preventDefault();
    const {deltaY} = e;
    const {scrollTop} = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
    const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

    if (deltaY > 0) {
      // 스크롤 내릴 때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        console.log('현재 1페이지, down');
        outerDivRef.current.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
          behavior: 'smooth',
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        console.log('현재 2페이지, down');
        outerDivRef.current.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
          behavior: 'smooth',
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
        //현재 3페이지
        console.log('현재 3페이지, down');
        outerDivRef.current.scrollTo({
          top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // 현재 4이지
        console.log('현재 4페이지, down');
        outerDivRef.current.scrollTo({
          top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
          left: 0,
          behavior: 'smooth',
        });
      }
    } else {
      // 스크롤 올릴 때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        console.log('현재 1페이지, up');
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        console.log('현재 2페이지, up');
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
        //현재 3페이지
        console.log('현재 3페이지, up');
        outerDivRef.current.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // 현재 4페이지
        console.log('현재 4페이지, up');
        outerDivRef.current.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <Outer ref={outerDivRef}>
      <Frame>
        <Content1>
          <Title>손쉽게 만드는 나만의 포트폴리오 전시장</Title>
          <Button>바로 시작하기</Button>
          <button>
            <FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" />
          </button>
        </Content1>
      </Frame>
      <Divider />
      <Frame>2페이지</Frame>
      <Divider />
      <Frame>3페이지</Frame>
      <Divider />
      <Frame>4페이지</Frame>
    </Outer>
  );
};

export default Landing;
