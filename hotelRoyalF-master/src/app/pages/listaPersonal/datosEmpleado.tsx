import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const Formulario = () => {
  const {handleClose, storeCreaetUpdate, oneData, labelData} = useContext(ContentContext)
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (e: React.ChangeEvent<unknown>) => {
    setSelectedValue((e as React.ChangeEvent<HTMLSelectElement>).target.value);
  }
  
  const {
      register,
      handleSubmit,
      formState: {errors},
      control,
      setValue,
      reset,
    } = useForm(),
    {toggleModal, show} = useContext(ContentContext),
    onSubmit = (data: any) => {
      // creaetUpdate({...data, id: oneData?.id || null})
      storeCreaetUpdate({ ...data, id: oneData?.id || null, habitacion: selectedValue });
    },
    setData = async () => {}

  // const [startDate, setStartDate] = useState(new Date());
  // const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <Fragment>
      <Button variant='primary' className='btn-icon' size='sm' onClick={() => toggleModal(1)}>
        Agregar persona
      </Button>

      <Modal
        show={show}
        onHide={() => toggleModal(0)}
        size='lg'
        backdrop='static'
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase h1'>Datos Empleado</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
            <Col lg={6} sm={12}>
                <p>Persona</p>
                <Form.Group controlId="habitacion">
                  <Form.Control as="select" {...register('persona')}>
                    <option value="">Selecciona una persona</option>
                    {labelData.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <p>salario</p>
                <Form.Group controlId='salario'>
                  <Form.Control
                    type='text'
                    placeholder='salario'
                    {...register('salario', {
                      required: 'Este campo es requerido',
                    })}
                  />
                  {/* {errors.campo2 && <p>{errors.campo2.message}</p>} */}
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <p>puesto</p>
                <Form.Group controlId='puesto'>
                  <Form.Control
                    type='text'
                    placeholder='puesto'
                    {...register('puesto', {
                      required: 'Este campo es requerido',
                    })}
                  />
                  {/* {errors.campo2 && <p>{errors.campo2.message}</p>} */}
                </Form.Group>
              </Col>

              
            </Row>

          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' type='submit'>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default Formulario
