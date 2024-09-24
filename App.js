import { BrowserRouter} from 'react-router-dom';
import NavScrollExample from './components/navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavScrollExample />
      </div>
    </BrowserRouter>
  );
}

export default App;
