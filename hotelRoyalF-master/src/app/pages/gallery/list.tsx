import { Row, Col } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/helpers';

const Index = () => {
  return (
    <div>
      <div>
        <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
          <img
            className='w-100 h-500px'
            src={toAbsoluteUrl('/media/img/fondos/gradas.jpg')}
            alt=''
            style={{ borderRadius: '15px' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BD9D56' }}>
            <p style={{ padding: '10px', textAlign: 'center', fontSize: '50px' }}>Conoce nuestras instalaciones</p>
          </div>
        </div>
        <Row>
          {/* primera fila  */}
          <h1 style={{ color: '#BD9D56' }}>Anenidades</h1>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/salon 2.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/piscina.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/royal.jpg')}
              alt=''
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/comedor.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/ginnasio.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/comerdor 2.jpg')}
              alt=''
            />
          </Col>
        </Row>
        {/* segunda fila  */}
        <h1 style={{ color: '#BD9D56' }}>Habitaciones</h1>
        <Row>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion1.png')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion2.png')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion3.png')}
              alt=''
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/habitaciones/habitacion4.png')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/ginnasio.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/comerdor 2.jpg')}
              alt=''
            />
          </Col>
        </Row>
        {/* tercer fila  */}
        <h1 style={{ color: '#BD9D56' }}>Gastronomía</h1>
        <Row>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/salon 2.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/piscina.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/royal.jpg')}
              alt=''
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/comedor.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/ginnasio.jpg')}
              alt=''
            />
          </Col>
          <Col md={4}>
            <img
              className='mx-auto w-100 w-md-275px h-md-275px w-xl-500px mb-10 mb-lg-20'
              src={toAbsoluteUrl('/media/img/fondos/comerdor 2.jpg')}
              alt=''
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
