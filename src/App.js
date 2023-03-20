
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Users from './Components/Users/Users';
import Contact from './Components/ContactUs/Contact';
import LoginPage from './Components/LoginPage/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { useState } from 'react';
import { Productdetails } from './Components/Product/Productdetails';
import { Provider } from "react-redux"
import store from './Redux/store'

function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [checkInput, setcheckInput] = useState(false)

  const location = useLocation()
  return (
    <div className="App">
      <Provider store={store}>
        {location.pathname !== '/' && <NavBar />}
        <Routes>

          <Route path='/' element={<LoginPage
            email={email}
            password={password}
            checkInput={checkInput}
            setemail={setemail}
            setpassword={setpassword}
            setcheckInput={setcheckInput}
          />}></Route>
          <Route path='/home' element={<ProtectedRoute Component={Home} />}></Route>
          <Route path='/products' element={<ProtectedRoute Component={Product} />}>
            <Route path='/products:category' element={<ProtectedRoute Component={Product} />}></Route>
          </Route>
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path='/users' element={<ProtectedRoute Component={Users} />}></Route>
          <Route path='/contact' element={<ProtectedRoute Component={Contact} />}></Route>
          <Route path='/*' element={<LoginPage />}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
