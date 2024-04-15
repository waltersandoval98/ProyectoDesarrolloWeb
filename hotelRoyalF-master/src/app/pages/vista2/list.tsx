import { Row, Col } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/helpers';

const Index = () => {
  return (
    <div>
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <img
          className='w-100 h-700px'
          src={toAbsoluteUrl('/media/img/fondos/fondoHotel.jpg')}
          alt=''
        />
      </div>
      <Row>
        <Col md={6}>
          <div>
            <h3 style={{ padding: '10px', textAlign: 'center', fontSize: '2.5rem' }}>
              Royal Hotel Guatemala
            </h3>
            <h2 style={{ padding: '10px', textAlign: 'center', fontSize: '1.25rem' }}>
              <b>Todas los servicios e instalaciones necesarias para que disfrute de su estancia en viajes de negocios o placer.</b>
            </h2>
            <p style={{ padding: '10px', textAlign: 'center', fontSize: '1rem' }}>
              El Royal Hotel Guatemala City es un magnífico hotel urbano que goza de una estratégica ubicación dentro de la principal zona de negocios, rodeado de restaurantes, comercios y áreas de entretenimiento, a tan solo 2,5 km del aeropuerto y a 4,5 km del centro histórico de Guatemala. El hotel de ciudad ideal para viajes de negocios y de placer.
            </p>
            <p style={{ padding: '10px', textAlign: 'center', fontSize: '1rem' }}>
              Este hotel de ciudad dispone de 397 elegantes habitaciones equipadas y reformadas completamente. En el año 2013 se realizó la instalación, en todas las habitaciones, de dispositivos de ahorro de energía como iniciativa para preservar el medio ambiente. Además, cuenta con habitaciones de categoría Premium para los huéspedes que estén interesados en disfrutar de una estancia con un plus en servicios y equipamiento.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <img
              className='mx-auto w-100 mb-4'
              src={toAbsoluteUrl('/media/img/fondos/royal.jpg')}
              alt=''
              style={{ maxHeight: '500px' }}
            />
            <p style={{ textAlign: 'left', fontSize: '1rem' }}>Instalaciones</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
