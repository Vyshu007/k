
import './App.css';
import {Routes,Route} from 'react-router-dom'; 
import BookList from './Component/BookList'; 
import BookDetails from './Component/BookDetails'; 
import Navbar from './Component/Navbar'; 
import Footer from './Component/Footer'; 
import Favorites from './Component/Favorites'; 

function App() {
  return (
    <div className='App'>  
    <Navbar/>
      <Routes>
        <Route path = '/' element={<BookList/>}/>
        <Route path = '/books/:id' element={<BookDetails/>}/>
        <Route path = '/favorites' element={<Favorites/>}/>   
        

      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
