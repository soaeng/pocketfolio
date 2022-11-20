import {useState} from 'react';
import {
  Container,
  IconBox,
  Icon,
  ThemeBox,
  ImgBox,
  Img,
} from './EditTheme.style';

const EditTheme = ({nowTheme, changeTheme}) => {
  const [open, setOpen] = useState(false);
  const themeList = [
    {
      src: '/assets/images/room_01.PNG',
      name: 'room_01',
    },
    {
      src: '/assets/images/room_02.PNG',
      name: 'room_02',
    },
    {
      src: '/assets/images/room_03.png',
      name: 'room_03',
    },
    {
      src: '/assets/images/room_04.png',
      name: 'room_04',
    },
    {
      src: '/assets/images/room_05.png',
      name: 'room_05',
    },
    {
      src: '/assets/images/apartment_01.png',
      name: 'apartment_01',
    },
    {
      src: '/assets/images/apartment_02.png',
      name: 'apartment_02',
    },
    {
      src: '/assets/images/apartment_03.png',
      name: 'apartment_03',
    },
    {
      src: '/assets/images/island.png',
      name: 'island',
    },
  ];

  return (
    <Container>
      <IconBox onClick={() => setOpen(!open)}>
        <Icon />
      </IconBox>

      <ThemeBox className={!open && 'close'}>
        {themeList.map((theme, idx) => (
          <ImgBox
            className={nowTheme == theme.name && 'now'}
            onClick={() => changeTheme(theme.name)}
          >
            <Img src={process.env.PUBLIC_URL + theme.src} />
          </ImgBox>
        ))}
      </ThemeBox>
    </Container>
  );
};

export default EditTheme;