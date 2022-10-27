import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ProtectedRoute from './components/authRedirect.component';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />

          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<HomePage/>} />
          </Route>

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;