import {Container, Title} from './Carousel.style';

const Carousel = ({rec, idx}) => {
  const icon = [
    '🧡',
    '💛',
    '💚',
    '💙',
    '💜',
    '🤎',
    '🖤',
    '🤍',
    '💖',
    '💗',
    '💘',
    '💕',
  ];

  return (
    <Container>
      {/* <Title>{`${icon[idx]} "${rec.name}"에서 가장 인기있는 포켓 ${icon[idx]}`}</Title> */}
      <Carousel>Carousel</Carousel>
    </Container>
  );
};

export default Carousel;
