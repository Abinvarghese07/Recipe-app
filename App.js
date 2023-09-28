import './App.css';
import Category from './components/Category';
import Cuisine from './components/Cuisine';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Searchbox from './components/Searchbox';
import Search from './components/Search';
import Recipe from './components/Recipe';

function App() {
 
  return (
    <div className="App">
    <Searchbox></Searchbox>
    <Category></Category>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
      <Route path='/searched/:search' element={<Search></Search>}></Route>
      <Route path='/recipe/:name' element={<Recipe></Recipe>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
