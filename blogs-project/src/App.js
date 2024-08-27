import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {user && <Route path='/' exact element={<Home/>}/>}
            <Route path='/home'exact element={<Home/>}/>
            <Route path='/blogs' exact element={<Blogs/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
