// import {useContext} from 'react'
// import {Row, Col} from 'react-bootstrap'
// import {ContentContext} from './context'

// const Formulario = ()=>{
//     const {texto} = useContext(ContentContext)
//     return (
//     <>
//     <Row>
//         <Col className='text-center'>
//         form {texto}
//         </Col>
//     </Row>
//     </>
//     )
// }

// export default Formulario
import { useContext } from 'react';
import { Modal, Row, Col, Button, Form } from 'react-bootstrap';
import { ContentContext } from './context'
import { useForm, SubmitHandler } from 'react-hook-form'
import { type } from 'os';


type Inputs = {
  nombre: String
  //exampleRequired: String
}

function Example() {
  const { texto, show, handleShow, handleClose } = useContext(ContentContext)
  //     const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {
    console.log(data)
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        CREAR
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Walter</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Modal.Body>

            <Row>
              <Form.Group as={Col} md='12' controlId='validationformik03'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text' //tipo de dato del imput
                  placeholder='Ingresa los datos' //para texto visual dentro del cuadro de texto
                  //name='City' //nombre de la variable
                  {...register('nombre',
                    {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',

                      },

                    })}
                  isInvalid={!!errors.nombre}

                />
                <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                {errors?.nombre?.message}

              </Form.Group>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type='submit'> 
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Example;