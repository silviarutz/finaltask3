import React  from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function EditCustomer (props){
        const [show, setShow] = React.useState(false)

        const[customer, setCustomer] = React.useState({
            firstname: '',
            lastname: '',
            streetaddress: '',
            postcode: '',
            city: '',
            email: '',
            phone: ''
        })
      
        const handleClose = () => 
            setShow(false)

        const handleSave = () => {
            props.editCustomer(props.row.value, customer)
            setShow(false)
        }
        const handleShow = () => {
            setCustomer({
                firstname: props.row.firstname,
                lastname: props.row.lastname,
                streetaddress: props.row.streetaddress,
                postcode: props.row.postcode,
                city: props.row.city,
                email: props.row.email,
                phone: props.row.phone,
            })
            setShow(true)
        }

        const inputChanged = event => {
            setCustomer({...customer, [event.target.name]: event.target.value})
        }
      
        return (
          <>
            <Button variant="secondary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control
                          name = "firstname" 
                          className="mb-3" 
                          value = {customer.firstname} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                           <Form.Control
                            name = "lastname" 
                            className="mb-3" 
                            value = {customer.lastname} 
                            onChange = {inputChanged}
                           />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                          name = "streetaddress" 
                          className="mb-3" 
                          value = {customer.streetaddress} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                          name = "postcode" 
                          className="mb-3" 
                          value = {customer.postcode} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                          name = "city" 
                          className="mb-3" 
                          value = {customer.city} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "email"
                          className="mb-3" 
                          value = {customer.email} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                          name = "phone" 
                          className="mb-3" 
                          value = {customer.phone} 
                          onChange = {inputChanged}
                        />
                    </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Edit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    

export default EditCustomer