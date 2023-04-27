import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Characters from './components/Characters/Characters';
import Operator from './components/Operator/Operator';
import Weapons from './components/Weapons/Weapons';
import WeaponsItem from './components/Weapons/WeaponsItem';
import Maps from './components/Maps/Maps';
import MapItem from './components/Maps/MapItem';

function App() {
  
  return (
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='characters' element={<Characters/>}/>
          <Route path='characters/:id' element={<Operator/>}/>
          <Route path='weapons' element={<Weapons/>}/>
          <Route path='weapons/:weapId' element={<WeaponsItem/>}/>
          <Route path='maps' element={<Maps/>}/>
          <Route path='maps/:mapId' element={<MapItem/>}/>
      </Routes>
  );
}

export default App;
