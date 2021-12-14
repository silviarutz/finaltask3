import React  from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'react-moment'

function Calendar() {
    const [training, setTraining] = React.useState([{
        title: "",
        start: "",
        end: "",
    },]);

    React.useEffect(() => {
        getTrainings();
      }, []);
    
    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then((response) => response.json())
        .then((responseData) => {
              return setTraining(
                responseData.map((data) => ({
                  start: new Date(moment(data.date).toISOString()),
                  end: new Date(moment(data.date).toISOString()).add(data.duration, "minutes"),
                  title: data.activity,
                }))
              );
            })
        .catch((err) => console.log(err));
      }
    
    return(
            <FullCalendar 
                top width="80%" 
                height="auto"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                events={training}
            />
        
        )
}

export default Calendar