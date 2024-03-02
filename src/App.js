import './App.css';
import AddRecipe from './components/AddRecipe';
import Home from './components/Home';
import {  Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Bookmarks from './components/Bookmarks';
import Logo from './components/Logo';

function App() {
  // localStorage.clear();
  document.title='BIG BITE';
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route exact path='/' element={<Logo />}></Route>
      <Route exact path='/Logo' element={<Logo />}></Route>
      <Route exact path='/home' element={<Home />}></Route>
      <Route exact path='/AddRecipe' element={<AddRecipe />}></Route>
      <Route exact path='/Bookmarks' element={<Bookmarks />}></Route>
     </Routes> 
    </>
  );
}

export default App;
