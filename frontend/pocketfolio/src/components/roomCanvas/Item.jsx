import {
  useGLTF,
  PivotControls,
  useCursor,
  meshBounds,
  useBounds,
  Html,
} from '@react-three/drei';
import {useState, useEffect, useRef} from 'react';
import {MeshStandardMaterial} from 'three';
import ButtonHtml from './ButtonHtml';

const Item = props => {
  const selectedMesh = props.selectedMesh;
  const setSelectedMesh = props.setSelectedMesh;
  const boundaryRef = props.boundaryRef;
  const data = props.data;
  const edit = props.edit;
  const cntRef = props.cntRef;
  const setCntEnabled = props.setCntEnabled;
  const idx = props.idx;
  const handleData = props.handleData;
  const handleDel = props.handleDel;
  const {nodes, materials} = useGLTF(`/assets/${data.name}.glb`);
  const _materials = new MeshStandardMaterial(
    materials[Object.keys(materials)[0]],
  );
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const ref = useRef(null);
  const api = useBounds();
  const matrix = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    data.position[2],
    data.position[1],
    data.position[0],
    1,
  ];
  const pivotRef = useRef();

  useEffect(() => {
    if (selectedMesh === ref.current) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedMesh]);

  const handleRotate = e => {
    handleData(
      {...data, rotateY: (data.rotateY - Math.PI / 4) % (Math.PI * 2)},
      idx,
    );
  };

  const handleMove = e => {
    const _matrix = pivotRef.current.matrix.elements;
    const _position = [_matrix[14], _matrix[13], _matrix[12]];
    handleData({...data, position: _position}, idx);
  };

  const handleDelBtn = e => {
    handleDel(idx);
  };

  useCursor(hovered);
  return (
    <PivotControls
      rotation={[0, -Math.PI / 2, 0]}
      anchor={[1, -1, -1]}
      scale={100}
      depthTest={false}
      fixed
      lineWidth={3}
      activeAxes={[true, true, true]}
      disableRotations={true}
      disableAxes={!selected || !edit}
      disableSliders={!selected || !edit}
      annotationsClass
      matrix={matrix}
      ref={pivotRef}
      visible={selected && edit}
      onDragEnd={handleMove}
    >
      {selected && edit && (
        <Html center occlude={pivotRef}>
          <ButtonHtml handleRotate={handleRotate} handleDelBtn={handleDelBtn} />
        </Html>
      )}
      <mesh
        ref={ref}
        raycast={meshBounds}
        castShadow
        {...props}
        geometry={nodes[data.name].geometry}
        material={_materials}
        rotation={[0, data.rotateY, 0]}
        dispose={null}
        material-color={hovered && !selected ? 'lightgray' : 'white'}
        onPointerOver={e =>
          !selected && (setHovered(true), e.stopPropagation())
        }
        onPointerOut={() => setHovered(false)}
        onClick={e => {
          if (e.object !== selectedMesh) {
            e.stopPropagation();
            setSelectedMesh(e.object);
            setCntEnabled(false);
          }
        }}
        onPointerMissed={e => {
          if (e.button === 0) {
            if (!edit) {
              cntRef.current.enabled = true;
              api.refresh(boundaryRef.current).clip().fit();
              setSelectedMesh('');
            }
          }
        }}
      />
    </PivotControls>
  );
};

export default Item;
