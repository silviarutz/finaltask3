import React  from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import dayjs from 'dayjs'
import Button from 'react-bootstrap/Button'

function TrainingTable() {
    const [training, setTraining] = React.useState([])

    React.useEffect(()=>{
        fetchTraining()
    }, [])

    const fetchTraining = () =>{
        fetch('https://customerrest.herokuapp.com/gettrainings', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => setTraining(data))
        .catch(err => console.error(err))
    }

    const deleteTraining = id => {
        if (window.confirm('Are you sure?')){
            fetch('https://customerrest.herokuapp.com/api/trainings/'+id, {method:'DELETE'})
            .then(response => {
                if (response.ok){
                    //setMsg('Trainings deleted')
                    //setOpen(true)
                    fetchTraining()
                } else{
                    alert('Something went wrong')
                }
            })
            .catch((err)=> console.error(err))
        }
        
    }


    const columns= [
        {   
            field:'date', 
            sortable: true, 
            filter: true,
            cellRenderer: params => {
                return dayjs(params.value).format('MM/DD/YYYY h:mm A') 
                }
        },
        {
            field:'duration', 
            sortable: true, 
            filter: true
        },
        {
            field:'activity', 
            sortable: true, 
            filter: true
        },
        {
            headerName:"Firstname",
            field:'customer.firstname', 
            sortable: true, 
            filter: true,
        },
        {
            headerName:"Lastname",
            field:'customer.lastname', 
            sortable: true, 
            filter: true,
        },
        {
            headerName:"",
            sortable: false,
            filter: false,
            width: 120,
            field: "id",
            cellRendererFramework: (params) => (
                <Button 
                onClick={() => deleteTraining(params.value)}>
                    Delete
                </Button>
                )
        }    
    ]

    return(
        <div className="ag-theme-material" style={{height: 600, width: '90%', margin: 'auto'}}>
            <AgGridReact
                rowData={training}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    )

}

export default TrainingTable