import React, {useContext, Fragment} from 'react'
import {Row, Col, Card, ListGroup} from 'react-bootstrap'
import {ContentContext} from './context'
// import imagen from '../../../'

const List = () => {
  const {allData} = useContext(ContentContext)

  // Datos de ejemplo con imágenes y nombres de personas

  return (
    <Fragment>
    <Row>
      {allData.map((persona) => (
        <Col key={persona.id} md={4}>
          <Card className="d-flex flex-row">
            <Card.Img src={'https://mmdate.vip/uploads/photos/thumbnail/2022/08/11/17624/1500_a4162a4c1a4374647aeaa3e929325cfc.jpeg'} alt={persona.nombre} style={{ width: '150px', height: '150px' }} />
            <Card.Body>
              <Card.Title>{persona.nombreCompleto}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Fragment>
  )
}

export default List
