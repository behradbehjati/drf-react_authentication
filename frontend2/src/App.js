import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext'

function App() {
    return(

    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <Header/>
        <Routes>

          <Route path="/" element={<Homepage/>} exact/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
        </AuthProvider>
      </BrowserRouter>
     </div>

);}

export default App;