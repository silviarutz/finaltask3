import Training from './components/TrainingTable'
import Customer from './components/CustomerTable'
import Calendar from './components/Calendar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'

function App() {

  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="customer" title="Customer">
          <TabContent>
            <div> 
              <Customer/>
            </div>
          </TabContent>
        </Tab>
        <Tab eventKey="training" title="Training">
          <TabContent>
            <div>
              <Training/>
            </div>
          </TabContent>
        </Tab>
        <Tab eventKey="dates" title="Dates">
        <TabContent>
            <div>
              <Calendar/>
            </div>
          </TabContent>
        </Tab>
        <Tab eventKey="statistics" title="Statistics" disabled>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
