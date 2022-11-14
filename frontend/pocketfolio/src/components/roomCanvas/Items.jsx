import {useState, useEffect} from 'react';
import {useFrame} from '@react-three/fiber';
import {useBounds} from '@react-three/drei';
import Item from './Item';

const Items = props => {
  const [selectedMesh, setSelectedMesh] = useState(false);
  const cntRef = props.cntRef;
  const boundaryRef = props.boundaryRef;
  const edit = props.edit;
  const setCntEnabled = props.setCntEnabled;
  const handleArrange = props.handleArrange;
  const handleDel = props.handleDel;
  const api = useBounds();
  const arranges = props.arranges;
  useEffect(() => {
    setSelectedMesh(false);
    api.refresh(boundaryRef.current).clip().fit();
  }, [edit, api]);

  useFrame((state, dt) => {
    if (selectedMesh) {
      if (!edit) {
        cntRef.current.enabled = false;
        cntRef.current.setAzimuthalAngle(selectedMesh.rotation._y);
        cntRef.current.setPolarAngle(Math.PI / 2);
        api.refresh(selectedMesh).clip().fit();
      } else {
        cntRef.current.enabled = true;
      }
    }
  });

  return (
    <group>
      {arranges.map((arrange, idx) => (
        <Item
          key={arrange.nameEng + idx}
          selectedMesh={selectedMesh}
          setSelectedMesh={setSelectedMesh}
          boundaryRef={boundaryRef}
          arrange={arrange}
          edit={edit}
          setCntEnabled={setCntEnabled}
          cntRef={cntRef}
          handleArrange={handleArrange}
          handleDel={handleDel}
          idx={idx}
        />
      ))}
    </group>
  );
};

export default Items;
