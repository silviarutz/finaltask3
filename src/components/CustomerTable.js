import React  from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import Button from 'react-bootstrap/Button'

import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

function CustomerTable() {
    const [customer, setCustomer] = React.useState([])
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null)
    //const [open, setOpen] = React.useState(false)
    //const [msg, setMsg] = React.useState ('')

    React.useEffect(()=>{
        fetchCustomer()
    }, [])

    const fetchCustomer = () =>{
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }

    const addCustomer = customer => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => fetchCustomer())  
        .catch((err)=> console.error(err))
    }

    const addTraining = training => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(response => fetchCustomer())  
        .catch((err)=> console.error(err))
    }

    const editCustomer = (url, updatedCustomer) =>{
        fetch(url,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json' 
            },
            body: JSON.stringify(updatedCustomer)
        })
        .then(response => {
            fetchCustomer()
            //setMsg('Customer edited')
            //setOpen(true)
        })
        .catch((err)=> console.error(err))
    }
    const deleteCustomer = url => {
        if (window.confirm('Are you sure?')){
            fetch(url, {method:'DELETE'})
            .then(response => {
                if (response.ok){
                    //setMsg('Car deleted')
                    //setOpen(true)
                    fetchCustomer()
                } else{
                    alert('Something went wrong')
                }
            })
            .catch((err)=> console.error(err))
        }
        
    }
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
      }
    
    const onBtnExport = () => {
        gridApi.exportDataAsCsv();
      }

    const columns= [
        {
            headerName:"",
            sortable: false,
            filter: false,
            width: 100,
            field: "links.0.href",
            cellRendererFramework: (params) => (
                <Button
                    variant="outline-success" 
                    onClick={() => <AddTraining addTraining={addTraining} customer={params.data}/>}>
                    +
                </Button>
                )
        },
        {field:'firstname', width: 110, sortable: true, filter: true},
        {field:'lastname', width: 110, sortable: true, filter: true},
        {field:'streetaddress', sortable: true, filter: true},
        {field:'postcode', width: 110, sortable: true, filter: true},
        {field:'city', width: 110, sortable: true, filter: true},
        {field:'email', sortable: true, filter: true},
        {field:'phone', width: 130, sortable: true, filter: true},
        {
            headerName:"",
            sortable: false,
            filter: false,
            width:100,
            field: "links.0.href",
            cellRendererFramework: (params) => 
            <EditCustomer 
                editCustomer = {editCustomer}
                row={params}/>

        },
        {
            headerName:"",
            sortable: false,
            filter: false,
            width: 120,
            field: "links.0.href",
            cellRendererFramework: (params) => (
                <Button
                    variant="outline-danger" 
                    onClick={() => deleteCustomer(params.value)}>
                    Delete
                </Button>
                )
        },
        
    ]

    return(
        <div>
            <div>
                <AddCustomer addCustomer={addCustomer}/> {' '}
            
                <Button 
                    onClick={() => onBtnExport()}>
                    Download CSV export file
                </Button>
            </div>

            <div className="ag-theme-material" style={{height: 600, width: '90%', margin: 'auto'}}>
                <AgGridReact
                    rowData={customer}
                    columnDefs={columns}
                    pagination={true}
                    paginationPageSize={10}
                    onGridReady={onGridReady}
                />
            </div>
        </div>
    )

}

export default CustomerTable