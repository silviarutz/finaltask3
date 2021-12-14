import React  from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function AddCustomer (props){
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
      
        const handleClose = () => setShow(false)
        
        const handleSave = () => {
            console.log(customer)
            props.addCustomer(customer)
            setShow(false)
        }
        const handleShow = () => setShow(true)

        const inputChanged = event => {
            console.log(event.target.value)
            setCustomer({...customer, [event.target.name]: event.target.value})
        }
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Add Customer
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Customer</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                    <Form.Group >
                        <Form.Control 
                        name = "firstname" 
                        className="mb-3" 
                        value = {customer.firstname} 
                        onChange = {inputChanged}
                        placeholder="Firstname" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "lastname" 
                          className="mb-3" 
                          value = {customer.lastname} 
                          onChange = {inputChanged}
                          placeholder="Lastname" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "streetaddress" 
                          className="mb-3" 
                          value = {customer.streetaddress} 
                          onChange = {inputChanged}
                          placeholder="Streetaddress" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control 
                          name = "postcode" 
                          className="mb-3" 
                          value = {customer.postcode} 
                          onChange = {inputChanged}
                          placeholder="Postcode" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "city" 
                          className="mb-3" 
                          value = {customer.city} 
                          onChange = {inputChanged}
                          placeholder="City" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "email"
                          className="mb-3" 
                          value = {customer.email} 
                          nChange = {inputChanged}
                          placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                          name = "phone" 
                          className="mb-3" 
                          value = {customer.phone} 
                          onChange = {inputChanged}
                          placeholder="Phone" />
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
    

export default AddCustomer