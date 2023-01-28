import React from 'react';
import Delete from '@mui/icons-material/Delete';
function Note(props){

    function handleClick(event){
        const id=props.id
        props.onDelete(id)
        console.log();
        // props.handleDelete(event.target.key)
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><Delete/></button>
        </div>
    )
}
export default Note;