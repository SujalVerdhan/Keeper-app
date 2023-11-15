import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    return (<div className="note">
    
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={()=>props.onDelete(props.id)} className="delete"><DeleteIcon/></button>
        
      </div>)

}
export default Note;