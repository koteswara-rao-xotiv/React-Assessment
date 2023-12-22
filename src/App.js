import './App.css';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar'
import Body from './components/body';
import Save from './components/save';
function App() {
  return (
    <div>
    <ToastContainer />
    <NavBar/>
    <Body/>
    <Save/>
</div>
  );
}

export default App;
