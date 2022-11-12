import { Container, TitleDiv, Title } from "./PortList.style"

const PortList = ({title}) => {

  return(
    <Container>
      <TitleDiv>
        <Title>{title}</Title>
      </TitleDiv>
    </Container>
  )
}

export default PortList