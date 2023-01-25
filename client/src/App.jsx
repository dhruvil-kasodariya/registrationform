import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import AdminRegistration from './Pages/AdminRegistration';
import CustomerRegistration from './Pages/CustomerRegistration';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter >
      <Routes>
        <Route path='/admin-registration' element={<AdminRegistration />} />
        <Route path='/customer-registration' element={<CustomerRegistration />} />
        <Route path='/admin' element={<AdminRegistration />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
