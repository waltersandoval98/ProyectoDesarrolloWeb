import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import {toAbsoluteUrl} from '../../../_metronic/helpers'

function ReservationForm() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());

  const handleCheckInDateChange = (date: Date | null) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date: Date | null) => {
    setCheckOutDate(date);
  };

  const handleSaveReservation = () => {
    // Aquí puedes manejar la lógica para guardar la reserva
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    // Realiza la lógica de guardar la reserva en tu base de datos o sistema
  };

  return (
    <>
      <div
          className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
          style={{backgroundImage: `url(${toAbsoluteUrl('/media/img/fondos2/fondocheck.jpg')})`}}
        ></div>
      <Row className="my-10 vh-50">
        <h1>"Bienvenido a tu refugio vacacional. Descubre el arte de relajarte y disfrutar."</h1>
      </Row>
      <Row className="my-10 vh-50">
        <div className="d-flex justify-content-center align-items-center">
          <div className="rounded p-4 bg-light" style={{ padding: '40px', width: '40%', height: '150px' }}>
            <div className="d-flex align-items-center">
              <h2 className="m-0">Check-In</h2>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkInCheckbox"
                  style={{ border: '2px solid #000', width: '30px', height: '30px' }}
                />
              </div>
            </div>
              <div className="w-100 mt-3 d-flex justify-content-center align-items-center" style={{ marginTop: '30px' }}>
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInDateChange}
                  className="w-500px"
                />
              </div>
          </div>
        </div>
      </Row>
      <Row className="my-10 vh-50">
        <div className="d-flex justify-content-center align-items-center">
          <div className="rounded p-4 bg-light" style={{ padding: '40px', width: '40%', height: '150px' }}>
            <div className="d-flex align-items-center">
              <h2 className="m-0">Check-Out</h2>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkInCheckbox"
                  style={{ border: '2px solid #000', width: '30px', height: '30px' }}
                />
              </div>
            </div>
              <div className="w-100 mt-3 d-flex justify-content-center align-items-center" style={{ marginTop: '30px' }}>
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInDateChange}
                  className="w-500px"
                />
              </div>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={6}>
          <button className="btn btn-primary" onClick={handleSaveReservation}>
            Guardar
          </button>
        </Col>
      </Row>

    </>
  );
}

export default ReservationForm;
