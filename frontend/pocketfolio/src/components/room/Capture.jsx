import {useFrame} from '@react-three/fiber';

const Capture = () => {
  useFrame(({gl, scene, camera}) => {
    gl.render(scene, camera);
    const screenshot = gl.domElement.toDataURL();
    console.log(screenshot);
  });
  return;
};

export default Capture;
