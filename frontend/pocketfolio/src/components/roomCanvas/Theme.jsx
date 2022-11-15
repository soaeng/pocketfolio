import {Bounds, useGLTF} from '@react-three/drei';
import {MeshStandardMaterial} from 'three';

const RoomTheme = props => {
  const name = props.name;
  const type = name.split('_')[0];
  let arr = [];
  if (type === 'room' || type === 'apartment') {
    arr = [name];
  } else if (name === 'island') {
    arr = ['Ocean', 'Sky', 'Island'];
  }
  return (
    <Bounds clip observe margin={type === 'island' ? 2 : 1.2}>
      {type === 'island' && (
        <mesh ref={props.boundaryRef} visible={false}>
          <boxGeometry args={[25, 25, 25]} />
        </mesh>
      )}
      {arr.map(_name => (
        <ThemeMesh name={_name} key={_name} />
      ))}
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
