import {useState} from 'react';
import ObjectItem from './ObjectItem';
import {Container, Tabs, Tab, ItemBox, ScrollBox} from './ObjectList.style';

const ObjectList = () => {
  const [category, setCategory] = useState('furniture');

  const changeCategory = state => {
    setCategory(state);
  };

  return (
    <Container>
      <Tabs>
        <Tab
          onClick={() => changeCategory('furniture')}
          className={category === 'furniture' ? 'active' : ''}
        >
          가구
        </Tab>
        <Tab
          onClick={() => changeCategory('animal')}
          className={category === 'animal' ? 'active' : ''}
        >
          동물
        </Tab>
        <Tab
          onClick={() => changeCategory('plant')}
          className={category === 'plant' ? 'active' : ''}
        >
          식물
        </Tab>
        <Tab
          onClick={() => changeCategory('diplay')}
          className={category === 'diplay' ? 'active' : ''}
        >
          전시
        </Tab>
        <Tab
          onClick={() => changeCategory('etc')}
          className={category === 'etc' ? 'active' : ''}
        >
          기타
        </Tab>
      </Tabs>

      <ScrollBox>

        <ItemBox>
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
          <ObjectItem />
        </ItemBox>
      </ScrollBox>
    </Container>
  );
};

export default ObjectList;
