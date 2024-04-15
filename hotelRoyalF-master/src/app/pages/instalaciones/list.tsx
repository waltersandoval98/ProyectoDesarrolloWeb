import { Container, Row, Col, Button } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/helpers';

const handleClick = () => {
  alert('¡Botón clickeado!');
};

const Index = () => {
  return (
    <>
    <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
        <img
          className='w-100 h-500px'
          src={toAbsoluteUrl('/media/img/fondos/vista3.jpg')}
          alt=''
          style={{ borderRadius: '15px' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BD9D56' }}>
          <p style={{ fontSize: '2.5rem', textAlign: 'center' }}>NUESTRAS HABITACIONES Y TARIFAS</p>
        </div>
      </div>
      <Row>      
        <Col md={6}>
          <div>
            <h3 style={{ fontSize: '1.5rem' }}><b>Habitación Superior con Terraza</b></h3>
            <h2 style={{ fontSize: '1.25rem' }}><b>Disfruta de confortables y luminosas habitaciones dobles con terraza.</b></h2>
            <p>
              <ul>
                <li>plancha</li>
                <li>Caja fuerte</li>
                <li>Conexión Wi-Fi (sin cargo)</li>
                <li>Aire acondicionado</li>
                <li>Set café y té</li>
                <li>Minibar</li>
                <li>Teléfono</li>
                <li>TV</li>
              </ul>
            </p>
            <p>4 Personas. • 3 adultos máx. / 2 niños máx.</p>
            <p><b>30 USD por noche</b></p>
            <Button className="button" onClick={handleClick}>Reservar Habitación</Button>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <img
              className='mx-auto w-100 mb-4'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion2.png')}
              alt=''
              style={{ maxHeight: '500px' }}
            />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: '40px' }}>
        <Col md={6}>
          <div>
            <img
              className='mx-auto w-100 mb-4'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion1.png')}
              alt=''
              style={{ maxHeight: '500px' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h3 style={{ fontSize: '1.5rem' }}><b>Habitación Superior Ejecutiva</b></h3>
            <h2 style={{ fontSize: '1.25rem' }}><b>Una habitación amplia, luminosa y confortable para huéspedes en viaje de ocio o negocios.</b></h2>
            <p>
              <ul>
                <li>plancha</li>
                <li>Caja fuerte</li>
                <li>Conexión Wi-Fi (sin cargo)</li>
                <li>Aire acondicionado</li>
                <li>Set café y té</li>
                <li>Minibar</li>
                <li>Teléfono</li>
                <li>TV</li>
              </ul>
            </p>
            <p>4 Personas. • 3 adultos máx. / 2 niños máx.</p>
            <p><b>40 USD por noche</b></p>
            <Button className="button" onClick={handleClick}>Reservar Habitación</Button>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: '40px' }}>
      
        <Col md={6}>
          <div>
            <h3 style={{ fontSize: '1.5rem' }}><b>Habitación Superior Premium Level</b></h3>
            <h2 style ={{ fontSize: '1.25rem' }}><b>Exclusiva habitación que ofrece al huésped un espacio elegante y totalmente equipado.</b></h2>
            <p>
              <ul>
                <li>Caja fuerte</li>
                <li>Conexión Wi-Fi (sin cargo)</li>
                <li>plancha</li>
                <li>TV</li>
                <li>Servicio despertador</li>
                <li>Albornoz</li>
                <li>Artículos de aseo</li>
                <li>Set café y té</li>
                <li>Minibar</li>
                <li>Teléfono</li>
                <li>Aire acondicionado</li>
              </ul>
            </p>
            <p>2 Personas.</p>
            <p><b>50 USD por noche</b></p>
            <Button className="button" onClick={handleClick}>Reservar Habitación</Button>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <img
              className='mx-auto w-100 mb-4'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion3.png')}
              alt=''
              style={{ maxHeight: '500px' }}
            />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: '40px' }}>
        <Col md={6}>
          <div>
            <img
              className='mx-auto w-100 mb-4'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion4.png')}
              alt=''
              style={{ maxHeight: '500px' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h3 style={{ fontSize: '1.5rem' }}><b>Amplias y confortables suites en dos niveles que garantizan al huésped su privacidad.</b></h3>
            <h2 style={{ fontSize: '1.25rem' }}><b>Una habitación amplia, luminosa y confortable para huéspedes en viaje de ocio o negocios.</b></h2>
            <p>
              <ul>
                <li>Despertador</li>
                <li>Caja fuerte</li>
                <li>Sala de estar</li>
                <li>Prensa</li>
                <li>Artículos de aseo</li>
                <li>TV</li>
                <li>Albornoz</li>
                <li>Conexión Wi-Fi (sin cargo)</li>
              </ul>
            </p>
            <p>4 Personas. • 3 adultos máx. / 2 niños máx.</p>
            <p><b>40 USD por noche</b></p>
            <Button className="button" onClick={handleClick}>Reservar Habitación</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Index;
