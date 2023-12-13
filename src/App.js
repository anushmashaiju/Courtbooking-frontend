import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import AddNewCourt from './Pages/AddNewCourt';
function App() {
  return (
   <>
   <ToastContainer/>
   <BrowserRouter>
  <Routes>
    <Route path='/'element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/addNewCourt' element={<AddNewCourt/>}/>
  </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
