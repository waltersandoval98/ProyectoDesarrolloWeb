import { Row, Col } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/helpers';
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Calendar from './calendar/calendar';
import {ContentProvider} from './calendar/context'

const Index = () => {
  return (
    <div>
      <Row>
      <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
        <img
          className='w-100 h-600px'
          src={toAbsoluteUrl('/media/img/fondos2/ciudad.jpg')}
          alt=''
          style={{ borderRadius: '15px' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BD9D56' }}>
          <p style={{ fontSize: '2.5rem', textAlign: 'center' }}>Reservaciones</p>
        </div>
      </div>
      </Row>
      <ContentProvider>
          <Calendar />
        </ContentProvider>
    
    </div>
  );
};

export default Index;
