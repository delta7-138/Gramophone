import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login"
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';

function App() {
    return (
        
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
