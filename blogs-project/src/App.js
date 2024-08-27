import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {user && <Route path='/' element={<ProtectedRoute element={Home} />} />}
            <Route path='/home' element={<ProtectedRoute element={Home} />} />
            <Route path='/blogs'  element={<Blogs/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/register'  element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
