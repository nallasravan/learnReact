import logo from './logo.svg';
import './App.css';
import  Binding  from './components/Binding/Binding';
import { Usestate } from './components/Usestate/Usestate';
import { Useeffect } from './components/useEffect/Useeffect';

function App() {
  return (
    <div className="App">
{/* <Binding /> */}
{/* <Usestate /> */}
<Useeffect/>
    </div>
  );
}

export default App;
