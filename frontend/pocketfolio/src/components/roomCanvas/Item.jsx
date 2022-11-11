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

  useCursor(hovered);
  return (
    <PivotControls
      rotation={[0, -Math.PI / 2, 0]}
      anchor={[1, -1, -1]}
      scale={75}
      depthTest={false}
      fixed
      lineWidth={2}
      activeAxes={[true, true, true]}
      disableRotations={true}
      disableAxes={!selected}
      disableSliders={!selected}
      annotationsClass
      matrix={matrix}
      ref={pivotRef}
      visible={selected}
    >
      {selected && (
        <Html center occlude={pivotRef}>
          <ButtonHtml />
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
        onPointerOver={e => (setHovered(true), e.stopPropagation())}
        onPointerOut={() => setHovered(false)}
        onClick={e => {
          e.stopPropagation();
          setSelectedMesh(e.object);
          api.refresh(e.object).clip().fit();
        }}
        onPointerMissed={e => {
          if (e.button === 0) {
            api.refresh(boundaryRef.current).clip().fit();
            setSelectedMesh('');
          }
        }}
      />
    </PivotControls>
  );
};

export default Item;
