import {useState} from 'react';
import {useFrame} from '@react-three/fiber';
import Item from './Item';

const Items = props => {
  const [selectedMesh, setSelectedMesh] = useState('');
  const cntRef = props.cntRef;
  const boundaryRef = props.boundaryRef;
  const datas = props.datas;

  useFrame((state, dt) => {
    if (selectedMesh) {
      cntRef.current.enabled = false;
      cntRef.current.setAzimuthalAngle(selectedMesh.rotation._y);
      cntRef.current.setPolarAngle(Math.PI / 2);
    } else {
      cntRef.current.enabled = true;
    }
  });

  return (
    <group>
      {datas.map((data, idx) => (
        <Item
          key={data.name + idx}
          selectedMesh={selectedMesh}
          setSelectedMesh={setSelectedMesh}
          boundaryRef={boundaryRef}
          data={data}
        />
      ))}
    </group>
  );
};

export default Items;
