import React from "react";
import ReactDOM from "react-dom/client"; 
import {books} from './books';  
import Book from './Book';
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));




const BookList = () => { 
    

  return (
    <div> 
    <h1>Amazon Best Sellers</h1>
    <div className="BookList"> 
         
         {books.map((x)=>{ 

             return (
               
    
                 <Book
                   Image={x.img}
                   Title={x.title}
                   Author={x.author}
                   id={x.id}
                 />
            
             );
            
         })}
    </div> 
    </div>
  );
};

root.render(<BookList/>);
