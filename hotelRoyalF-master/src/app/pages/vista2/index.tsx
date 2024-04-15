import {Row, Col} from 'react-bootstrap'
// import Formulario from './form'
import Listado from './list'
import {ContentProvider} from './context'
import { ContentContext } from '../../../utilitis/context'
import { useContext } from 'react'

const Index = () => {
  const { useAuth } = useContext(ContentContext);
  console.log(useAuth);
  return (
    
    <ContentProvider>
      <Row>
        <Col className='d-flex justify-content-center'></Col>
      </Row>
      <Listado />
    </ContentProvider>
  )
}
export default Index
