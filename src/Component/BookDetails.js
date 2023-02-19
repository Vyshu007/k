import React,{useState,useEffect} from 'react'
import '../App' 
import { useParams } from 'react-router' 
import axios from 'axios' 
import { BOOK_DETAILS_URL } from '../API'
const BookDetails = () => {  
  const [book,setBook] = useState({})
  const {id} = useParams(); 
  useEffect(()=>{
 axios.get(`${BOOK_DETAILS_URL}/${id}`) 
 .then(res=>{
  setBook(res.data);
 }) 
 .catch((err)=> console.log(err));
  },[id])
  return (
    <div className='book-details'>
      <div className='book-image'><h2>{book?.title}</h2> 
      <img src={book?.image_url} alt='#'/>
      </div>  

      <div className='book-description'>
        <h2>description</h2> 
        <p>{book?.description}</p> 
        <h2>authors</h2> 
        <p>{book?.authors}</p> 
        <h2>genres</h2> 
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails