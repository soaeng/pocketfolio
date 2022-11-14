import {Bounds, useGLTF} from '@react-three/drei';
import {MeshStandardMaterial} from 'three';

const RoomTheme = props => {
  const name = props.name;
  return (
    <Bounds clip observe margin={2}>
      {/* <mesh ref={props.boundaryRef} visible={false}>
        <boxGeometry args={[10, 10, 10]} />
      </mesh> */}
      <ThemeMesh name={name} />
      {props.children}
    </Bounds>
  );
};

RoomTheme.defaultProps = {
  name: 'room_01',
};

function ThemeMesh(props) {
  const name = props.name;
  const {nodes, materials} = useGLTF(`/assets/${name}.glb`);
  const _materials = new MeshStandardMaterial(
    materials[Object.keys(materials)[0]],
  );
  return (
    <mesh
      {...props}
      geometry={nodes[name].geometry}
      material={_materials}
      dispose={null}
    ></mesh>
  );
}

export default RoomTheme;
