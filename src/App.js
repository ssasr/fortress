import Burning from './components/burninglist.component';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import AddFortress from './components/addFortress';
import Navbar from './components/navbar';
const header='./media/login_logo.jpg'
function App() {
  return (
    <>
    <img src={header} alt="NO HEADER LOGO" className="header_logo"/>
    <Navbar/>
    <switch>
      <Routes> 
      
      <Route path="/home" Component={Burning}/>
      <Route path="/fortress" Component={AddFortress}/>
      </Routes>
    </switch>
    </>
   
  );
}

export default App;

