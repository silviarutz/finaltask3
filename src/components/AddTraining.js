import React  from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function AddTraining (props){
        const [show, setShow] = React.useState(false)

        const[training, setTraining] = React.useState({
            date: '',
            activity: '', 
            duration: '',  
            customer: 'props.customer.links.0.href'
        })

        const handleClose = () => setShow(false)

        const handleSave = () => {
            props.addTraining(training)
            setShow(false)
        }
        const handleShow = () => setShow(true)

        const inputChanged = event => {
            setTraining({...training, [event.target.name]: event.target.value})
        }

      
        return (
          <>
            <Button variant="secondary" onClick={handleShow}>
              +
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Training</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            placeholder="Date"
                            name = "date" 
                            className="mb-3" 
                            value = {training.date} 
                            onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            name = "activity" 
                            className="mb-3" 
                            value = {training.activity} 
                            onChange = {inputChanged}
                            placeholder="Activity" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            name = "duration" 
                            className="mb-3" 
                            value = {training.duration} 
                            onChange = {inputChanged}
                            placeholder="Duration" />
                    </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    

export default AddTraining