import {useFrame} from '@react-three/fiber';
import {updateRoom} from '../../store/roomSlice';
import {useDispatch} from 'react-redux';

const Capture = ({capture, offCaptrue, data, changeSidebar}) => {
  const dispatch = useDispatch();

  // base64 to file
  function base64toFile(base_data, filename) {
    var arr = base_data.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }

  useFrame(({gl, scene, camera}) => {
    if (capture) {
      changeSidebar('');
      gl.render(scene, camera);
      const screenshot = gl.domElement.toDataURL();

      const file = base64toFile(screenshot, 'thumbnail.png');
      sendCapture(file);
      offCaptrue();
    }
  });

  async function sendCapture(file) {
    // form 생성
    const form = new FormData();

    const json = JSON.stringify({
      name: data.room.name,
      category: data.room.category.categorySeq,
    });
    form.append('room', new Blob([json], {type: 'application/json'}));

    form.append('thumbnail', file);

    await dispatch(
      updateRoom({
        roomSeq: data.room.roomSeq,
        data: form,
      }),
    );
  }

  return;
};

export default Capture;
