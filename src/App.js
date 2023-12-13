<<<<<<< HEAD
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
=======
import './App.css';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
  <Routes>
    <Route path='/'element={<Login/>}/>
>>>>>>> 5714c7c7a5537d8b33b1566ae30e76c7ade6f72f
  </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
