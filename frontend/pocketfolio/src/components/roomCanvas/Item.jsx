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
  const arrange = props.arrange;
  const edit = props.edit;
  const cntRef = props.cntRef;
  const setCntEnabled = props.setCntEnabled;
  const idx = props.idx;
  const handleArrange = props.handleArrange;
  const handleDel = props.handleDel;
  const loadConnect = props.loadConnect;
  const changeNowIdx = props.changeNowIdx;
  const openPortDetail = props.openPortDetail;
  const setSidebar = props.setSidebar;

  const {nodes, materials} = useGLTF(arrange.item.asset);
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
    arrange.location[2],
    arrange.location[1],
    arrange.location[0],
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
    handleArrange(
      {...arrange, rotation: (arrange.rotation - Math.PI / 4) % (Math.PI * 2)},
      idx,
    );
  };

  const handleMove = e => {
    const _matrix = pivotRef.current.matrix.elements;
    const _location = [_matrix[14], _matrix[13], _matrix[12]];
    handleArrange({...arrange, location: _location}, idx);
  };

  const handleDelBtn = e => {
    handleDel(idx);
  };

  useCursor(hovered);

  const meshProps = {
    'material-color': hovered && !selected ? 'lightgray' : 'white',
    onPointerOver: e => !selected && (setHovered(true), e.stopPropagation()),
    onPointerOut: () => setHovered(false),
    onClick: e => {
      if (e.object !== selectedMesh) {
        e.stopPropagation();
        setSelectedMesh(e.object);
        setCntEnabled(false);
        changeNowIdx(idx);
        if (arrange.portSeq && !edit) {
          openPortDetail(arrange.portSeq);
        }
      }
    },
    onPointerMissed: e => {
      if (e.button === 0) {
        if (!edit) {
          cntRef.current.enabled = true;
          api.refresh(boundaryRef.current).clip().fit();
          setSelectedMesh('');
          setSidebar('');
        }
      }
    },
  };
  return (
    <PivotControls
      anchor={[1, 2, -1]}
      rotation={[0, -Math.PI / 2, 0]}
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
          <ButtonHtml
            handleRotate={handleRotate}
            handleDelBtn={handleDelBtn}
            loadConnect={loadConnect}
            idx={idx}
          />
        </Html>
      )}
      <mesh
        ref={ref}
        raycast={meshBounds}
        castShadow
        geometry={nodes[arrange.item.nameEng].geometry}
        material={_materials}
        rotation={[0, arrange.rotation, 0]}
        dispose={null}
        {...(edit || arrange.portSeq ? {...meshProps} : {})}
      />
    </PivotControls>
  );
};

export default Item;
