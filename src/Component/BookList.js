import React,{useState,useEffect} from 'react'
import '../App' 
import { API_URL } from '../API' 
import axios from 'axios'; 

import { useNavigate } from 'react-router';
const BookList = () => { 
const [books, setBooks] = useState([]); 


const navigate = useNavigate()


useEffect (()=>{
    axios 
    .get(API_URL) 
    .then((res)=>{
        console.log(res.data);
        setBooks(res.data);
    }) 
    .catch((err)=>console.log(err))
},[]);
  return (
    <div className='book-list'>
       {books.map((book)=>(
        <div key={book.id} className='book'>
            <div>
                <h4>{book.title}</h4>
            </div> 
            <div>
                <img src={book.image_url} alt='#' onClick={()=>navigate(`/books/${book.id}`)}/>
            </div> 
            
            </div>
       ))}
       </div>
  )
}

export default BookList 