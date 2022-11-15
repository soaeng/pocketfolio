// import {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {
//   Container, 
//   TitleDiv, 
//   Title, 
//   IconDiv, 
//   DelIcon,
//   Table,
//   Tr,
//   Th,
//   Td,
// } from './PortList.style';
// import DeleteModal from './DeleteModal';
// import {deletePort} from '../../store/portSlice';
// import toast, {Toaster} from 'react-hot-toast';

// const PortList = props => {
//   const dispatch = useDispatch();
//   const {item, isDeletePort, deletedPort, setDeletedPort} = props;
//   // 모달 개폐 변수
//   const [isOpen, setIsOpen] = useState(false);

//   // 휴지통 아이콘 클릭 시 모달 오픈
//   const clickIcon = () => {
//     setIsOpen(!isOpen);
//   };

//   // 해당 포트폴리오 삭제 
//   const deletePortHandle = () => {
//     dispatch(deletePort(item.portSeq)).then(res => {
//       setDeletedPort(!deletedPort);
//       clickIcon();
//       toast.success('포트폴리오가 삭제 되었습니다.');
//     });
//   };

//   return (
//     <Container>
//       <Toaster
//         position="top-center"
//         containerStyle={{
//           position: 'absolute',
//         }}
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: '#fff',
//             color: '#333333',
//             fontSize: '0.85rem',
//           },
//         }}
//       />

//         <Table>z

        
//       <TitleDiv>
//         <Title>{item.name}</Title>
//       </TitleDiv>

//       <IconDiv
//         onClick={event => {
//           event.stopPropagation();
//           clickIcon();
//         }}
//         className={isDeletePort ? 'on' : ''}
//       >
//         <DelIcon></DelIcon>
//       </IconDiv>


//       {isOpen && (
//         <DeleteModal
//           onClose={() => setIsOpen(false)}
//           text={'포트폴리오를'}
//           deleteFunc={deletePortHandle}
//         ></DeleteModal>
//       )}
//     </Container>
//   );
// };

// export default PortList;
