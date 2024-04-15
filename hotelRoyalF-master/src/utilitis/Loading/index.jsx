import { useContext } from 'react'
import { Modal, Spinner } from 'react-bootstrap-v5'
import { LoadingContext } from './provider'

export const Loading=()=>{
    
    const {showLoad} =useContext(LoadingContext)
    return(
        <Modal show={showLoad} backdrop="static" centered keyboard={false} style={{zIndex: '10000000000', "backgroundColor": "rgba(0,0,0,0.7)" }}>
            <Modal.Body className="ribbon ribbon-start ribbon-clip">
            <div className="ribbon-label">
                INGECOP
                <span className="ribbon-inner bg-dark"></span>
            </div>
            <div className="card-title w-100 text-center h1 text-dark"><span className="me-10">Procesando...</span>
                <Spinner
                    as="span"
                    animation="border"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                />
            </div>
            </Modal.Body>
        </Modal>
    )
}

export default Loading