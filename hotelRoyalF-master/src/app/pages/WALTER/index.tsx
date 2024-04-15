import { Row, Col } from 'react-bootstrap'
//import context from './context'
import Formulario from './form'
import Lista from './list'
import {ContentProvider} from './context'


const Index = () => {
    return (
        <ContentProvider>
           
                <Formulario />
                <Row>
                    <Col className='text-center'>
                        index
                    </Col>
                </Row>
           <Lista/>
        </ContentProvider>
    )
}

export default Index