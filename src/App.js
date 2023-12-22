import './App.css';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar'
import Body from './components/body';
function App() {
  return (
    <div>
    <ToastContainer />
    <NavBar/>
    <Body/>
</div>
  );
}

export default App;
