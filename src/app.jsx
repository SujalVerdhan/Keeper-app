import React ,{useState}from "react";
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Note from "./note.jsx"

import Input from "./input.jsx"


function App(){
function getitemsfromLocal(){
const found=JSON.parse(localStorage.getItem("notes"))
if(found){
return found
}
else{
  return [];
}
}
  const [notes,setNotes]=useState(getitemsfromLocal())
    

  function addNote(note){
    console.log(note)
    setNotes(prevvalues=>{
     
     return [...prevvalues,note]
     
    })
   
    
   }
   
    
   localStorage.setItem("notes", JSON.stringify(notes));
    function handleDelete(ids){
        setNotes(prevvalues=>{
           return prevvalues.filter((note,index)=>{
          return index!==ids
        })
    })
      }
    return (<div><Header/>
      <Input add={addNote}/>
      {notes.map((note,index)=>{
       return <Note key={index} id={index} title={note.title} description={note.description} onDelete={handleDelete}/>
      })
      }
         

  
          
        <Footer/></div>)
}
export default App;