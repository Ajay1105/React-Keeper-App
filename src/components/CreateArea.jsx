import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [createData, setCreateData] = useState({
    title:"",
    content: "",
    id:""
  })
  function handleChange(event){
   const target = event.target.name;
   const value = event.target.value;
    setCreateData((prev)=>{
        return {
          ...prev,
          [target]: value,
          id: props.id
      }
   })
  }
  var isDisplay = props.display;
  return (
    <div>
      <form>
        {(isDisplay && <input name="title" placeholder="Title" onChange={handleChange} value={createData.title}/>)}
        <textarea name="content" placeholder="Take a note..." rows={isDisplay?"3":"1"} onChange={handleChange} onClick={props.click} value={createData.content}/>
        {(isDisplay && <button className="formBtn" onClick={(event)=>{props.handleSubmit(createData); event.preventDefault();}}><AddIcon /></button>)}
      </form>
    </div>
  );
}

export default CreateArea;
