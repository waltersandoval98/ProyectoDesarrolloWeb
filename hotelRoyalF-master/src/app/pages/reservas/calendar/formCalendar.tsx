import {useContext, useEffect} from 'react'
import {Button, Modal, Row, Col, Form} from 'react-bootstrap'
import {ContentContext} from '../context'
import {useForm} from 'react-hook-form'
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

type Inputs = {
  nombre: string
}
function Example({ selectedEventId }: { selectedEventId: string }) {
  const {show, handleShow, handleClose, creaetUpdate, oneData} = useContext(ContentContext)
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {
    creaetUpdate({...data, id: oneData?.id || null})
  }

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (oneData?.id) {
      setValue('nombre', oneData?.nombre)
    }
  }, [oneData])
  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Reservar
      </Button> */}

      <Modal show={show && selectedEventId === oneData?.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de pago</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                  <Form.Label>Cantidad total</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Cantidad'
                    {...register('nombre', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    isInvalid={!!errors.nombre}
                  />

                  <Form.Control.Feedback type='invalid'>
                    {errors?.nombre?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                  <Form.Label>Monto Parcial</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Monto'
                    {...register('nombre', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    isInvalid={!!errors.nombre}
                  />

                  <Form.Control.Feedback type='invalid'>
                    {errors?.nombre?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={6} sm={12}>
                <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                  <Form.Label>Numero De tarjeta</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Numero De tarjeta'
                    {...register('nombre', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    isInvalid={!!errors.nombre}
                  />

                  <Form.Control.Feedback type='invalid'>
                    {errors?.nombre?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                  <Form.Label>Cvv</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='cvv'
                    {...register('nombre', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    isInvalid={!!errors.nombre}
                  />

                  <Form.Control.Feedback type='invalid'>
                    {errors?.nombre?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                  <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                    <Form.Label>Mes</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Mes'
                      {...register('nombre', {
                        required: {
                          value: true,
                          message: 'Este campo es requerido',
                        },
                      })}
                      isInvalid={!!errors.nombre}
                    />

                    <Form.Control.Feedback type='invalid'>
                      {errors?.nombre?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                    <Form.Label>Año</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Año'
                      {...register('nombre', {
                        required: {
                          value: true,
                          message: 'Este campo es requerido',
                        },
                      })}
                      isInvalid={!!errors.nombre}
                    />

                    <Form.Control.Feedback type='invalid'>
                      {errors?.nombre?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
            </Row>


            
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' type='submit'>
              Pagar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Example
