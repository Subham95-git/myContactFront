
import './App.css';
import Nvbar from  './Components/Navbar/Navbar';
import Datatable from './Components/Datatable/Datatable';
import Addcontact from './Components/AddcontactForm/AddContact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Nvbar/>
      

      <Switch>
        <Route path={"/add"} component={Addcontact}/>
        <Route path={"/"} component={Datatable}/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
