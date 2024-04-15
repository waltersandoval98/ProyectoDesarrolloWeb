import React from 'react';
import { Row, Col,Button, Form } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/helpers';
// import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Index = () => {
  return (
    <>     

      <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
        <img
          className='w-100 h-600px'
          src={toAbsoluteUrl('/media/img/fondos2/chica.jpg')}
          alt=''
          style={{ borderRadius: '15px' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BD9D56' }}>
          <p style={{ fontSize: '2.5rem', textAlign: 'center' }}>¿Cómo podemos ayudarte?</p>
        </div>
      </div>
      <Row>
        <h3 style={{ fontSize: '1.5rem', textAlign:'center', marginTop:'70px'}}><b>Nos encantaría escuchar tus comentarios. Por favor envíenos un correo</b></h3>
        <div className="d-flex justify-content-center" style={{ minHeight: '100vh', marginTop:'70px' }}>
          <Form >
            <Form.Group controlId="input1">
              <Form.Label >Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" style={{ width: '700px' }} />
            </Form.Group>
            <Form.Group controlId="input2">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su correo electrónico" style={{ width: '700px' }} />
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.Label>Comentario</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Ingrese su mensaje" style={{ width: '700px' }} />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="warning"
                style={{ color: 'white', fontSize: '1rem', padding: '10px 20px', marginTop: '20px', backgroundColor: '#BD9D56', }}
              >Enviar Mensaje</Button>
            </div>
            <Row style={{ marginTop: '20px' }}>
              {/* <Col>
                <FontAwesomeIcon icon={faPhone} />
                <p style={{ marginLeft: '10px' }}>+502 5625-7496</p>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faEnvelope} />
                <p style={{ marginLeft: '10px' }}>royalhotel@gmail.com</p>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faMapMarker} />
                <p style={{ marginLeft: '10px' }}>19 Calle 8-82, Cdad. de Guatemala 01013</p>
              </Col> */}
            </Row>
          </Form>
        </div>
      </Row>
    </>
  );
};

export default Index;
