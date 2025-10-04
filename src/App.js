import logo from './logo.svg';
import './App.css';
import  Binding  from './components/Binding/Binding';
import { Usestate } from './components/Usestate/Usestate';
import { Useeffect } from './components/useEffect/Useeffect';
import { Axios } from './components/AXIOS/Axios';
import { TwoWayBinding } from './components/TwowayBindin/TwowayBinding';
import Dependency from './components/Dependency/Dependency';
import Weather from './components/Weather/Weather';
import Onchange from './components/OnChange/Onchange';
import Dependent from './components/Dependent/Dependent';

function App() {
  return (
    <div className="App">
{/* <Binding /> */}
{/* <Usestate /> */}
{/* <Useeffect/> */}
{/* <Axios /> */}
{/* { <TwoWayBinding/>} */}
{/* <Dependency /> */}
{/* <Weather /> */}
{/* <Onchange /> */}
<Dependent />
    </div>
  );
}

export default App;
