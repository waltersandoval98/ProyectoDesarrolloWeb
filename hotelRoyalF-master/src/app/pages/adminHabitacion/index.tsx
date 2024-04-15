import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ContentProvider } from './context'

import Formulario from './Form'
import List from './List'


const Index = () => {
    
    return (
        <Fragment>
            <ContentProvider>
                <Row>
                    <Col className='d-flex justify-content-end mb-5'>
                    <Formulario/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <List/>
                    </Col>
                </Row>
            </ContentProvider>
        </Fragment>
    )
}

export default Index