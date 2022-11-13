import {useState, useEffect} from 'react';
import {useFrame} from '@react-three/fiber';
import {useBounds} from '@react-three/drei';
import Item from './Item';

const Items = props => {
  const [selectedMesh, setSelectedMesh] = useState(false);
  const cntRef = props.cntRef;
  const boundaryRef = props.boundaryRef;
  const setDatas = props.setDatas;
  const datas = props.datas;
  const edit = props.edit;
  const setCntEnabled = props.setCntEnabled;
  const api = useBounds();

  useEffect(() => {
    setSelectedMesh(false);
  }, [edit]);

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

  const handleData = (data, idx) => {
    setDatas(
      datas.map((_data, _idx) => {
        if (idx === _idx) {
          return data;
        } else {
          return _data;
        }
      }),
    );
  };
  const handleDel = idx => {
    setDatas(datas.filter((_data, _idx) => idx !== _idx));
  };

  return (
    <group>
      {datas.map((data, idx) => (
        <Item
          key={data.name + idx}
          selectedMesh={selectedMesh}
          setSelectedMesh={setSelectedMesh}
          boundaryRef={boundaryRef}
          data={data}
          edit={edit}
          setCntEnabled={setCntEnabled}
          cntRef={cntRef}
          handleData={handleData}
          handleDel={handleDel}
          idx={idx}
        />
      ))}
    </group>
  );
};

export default Items;
