import { Row, Col, Button, Table } from 'react-bootstrap'
import { useContext } from 'react'
import { ContentContext } from './context'

const Lista = () => {
    const { texto, handleShow } = useContext(ContentContext)
    //const { allData } = useContext(ContentContext)
    return (
        <>
            <Row>
                <Col className='text-center'>
                    Lista {texto}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        ABRIR CREAR
                    </Button>
                </Col>
            </Row> 
            {/* <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>DPI</th>
                                <th>Genero</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData.map((item: any, index: number)=>(
                                    <tr key={index}>
                                       <td>{item.id}</td> 
                                       <td>{item.nombre}</td> 
                                       <td>{item.dpi}</td> 
                                       <td>{item.genero}</td> 
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row> */}


        </>
    )
}

export default Lista