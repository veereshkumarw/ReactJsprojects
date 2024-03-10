
import './style.scss';
import HomePage from './pages/HomePage';
import Loginpage from './pages/Loginpage';
import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from './context/AuthenticationContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }
    return children
  }
 
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/'>
               <Route path='/' element={
                   <ProtectedRoute>
                        <HomePage/>
                   </ProtectedRoute> 
                }/>
               <Route path='/login' element={<Loginpage/>}/>
               <Route path='/register' element={<RegistrationPage/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
