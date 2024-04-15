import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal} from 'react-bootstrap'

export const Formulario = () => {
  const {
      register,
      handleSubmit,
      formState: {errors},
      control,
      setValue,
      reset,
    } = useForm(),
    {toggleModal, show} = useContext(ContentContext),
    onSubmit = (data: any) => {},
    setData = async () => {}

  return (
    <Fragment>
      <Button
        variant='primary'
        className='btn-icon'
        size='sm'
        onClick={() => toggleModal(1)}
      >
        +
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
          <Modal.Title className='text-uppercase h1'>RESERVAS</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body></Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default Formulario
