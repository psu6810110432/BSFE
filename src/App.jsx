// App.jsx
import './App.css'
import axios from 'axios'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import BookScreen from './BookScreen';

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleLoginSuccess = () => { setIsAuthenticated(true) }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/books" /> : <LoginScreen onLoginSuccess={handleLoginSuccess} />} 
        />
        <Route 
          path="/books" 
          element={isAuthenticated ? <BookScreen /> : <Navigate to="/login" />} 
        />
        <Route 
          path="*" 
          element={<Navigate to={isAuthenticated ? "/books" : "/login"} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App