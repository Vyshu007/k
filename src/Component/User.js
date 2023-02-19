import React,{useState,useEffect} from 'react' 
import View from './View';
import './User.css'; 

const getDatafromLS=()=>{
    const data = localStorage.getItem('books');
    if(data){
        return JSON.parse(data);
    } 
    else{
        return []
    }
}
const User = () => {  
    const [books,setbooks] = useState(getDatafromLS());

    const [title,setTitle] = useState(''); 
    const [author,setAuthor]= useState('');
    const [isbn,setIsbn] = useState(''); 

    const handleAddBookSubmit=(e)=>{
        e.preventDefault(); 

        let book={
            title,
            author, 
            isbn
        } 
        setbooks([...books,book]); 
        setTitle(''); 
        setAuthor('');
        setIsbn('');
    } 

    const deleteBook=(isbn)=>{
        const filteredBooks=books.filter((element,index)=>{
            return element.isbn !== isbn 
        }) 
        setbooks(filteredBooks);
    }


    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
    },[books]) 

  return (
    <div className='wrapper'>
    <h1>booklist app</h1> 
    <p>add and view your books</p> 
    <div className='main'>

        <div className='form-container'>
  <form autoComplete='off' className='form-group'
    onSubmit={handleAddBookSubmit}>

    <label>title</label> 
    <input type='text' className='form-control' required 
    onChange={(e)=> setTitle(e.target.value)} value={title}></input> 
    <br></br>
    <label>author</label> 
    <input type='text' className='form-control' required 
    onChange={(e)=> setAuthor(e.target.value)} value={author}
    ></input> 
    <br></br>
    <label>ISBN#</label> 
    <input type='text' className='form-control' required 
    onChange={(e)=> setIsbn(e.target.value)} value={isbn}
    ></input> 
    <br></br> 
    <button type='submit' className='btn btn-success btn-md'>add</button>
  </form>
        </div> 

        <div className='view-container'> 
        {books.length>0&&<> 
        <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ISBN#</th> 
                        <th>Title</th> 
                        <th>Author</th> 
                        <th>Delete</th>
                    </tr> 
                    
                </thead> 
                <tbody>
                    <View books={books} deleteBook={deleteBook}/>
                </tbody>
            </table>
        </div>
        </>}
       {books.length<1 && <div> no books are added yet</div>}
        </div>
    </div>
    </div>
  )
}

export default User