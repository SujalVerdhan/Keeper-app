import React,{useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
function Input(props){
    const [note,setNote]=useState({title:"",description:""})
  const [isExpanded,setExpanded]=useState(false)
    function handleChange(event){
        const {name,value}=event.target;
        setNote((prevvalue)=>{
              return {...prevvalue,[name]:value}
        })
    }
    function handleClick(event){
        props.add(note)
        setNote({title:"",description:""})
        event.preventDefault()
    }
    function setInput(){
        setExpanded(true);
    }
    return <div><form className="Button">
   { isExpanded && <input  onChange={handleChange} name="title" type="text" value={note.title} placeholder="Title"></input>}
    <textarea onClick={setInput} onChange={handleChange} name="description"  rows={isExpanded?"3":"1"} value={note.description} placeholder="Take a note ..."></textarea>
    <Zoom in={isExpanded}> 
    <Fab onClick={handleClick} ><AddIcon/></Fab>
    </Zoom>
     </form>
     </div>
}
export default Input;