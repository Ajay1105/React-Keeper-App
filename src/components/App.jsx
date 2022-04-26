import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
let a=1;
   const[isClicked,setClick] = useState(false);
  
   const [noteData, setData] = useState([{
    title : "trail",
    content: "trail sucessfull",
    id:"1"
  }]);
  
  function toogle(Data){
    setData((prev)=>{
      return [
        ...prev,
        { 
          title : Data.title,
          content: Data.content,
          id: Data.id
        }
      ]
    });
  };

  function handleDelete(id){
   console.log(id);
   setData((prev)=>{
      return prev.filter((prevData,index)=>{
      return index !==(id-1)
     })
   });
  };

  function handleClick(){
    setClick(!isClicked);
  }

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={toogle} click={handleClick} display = {isClicked}/>
      {noteData.map((data)=>{
        return <Note id={a} key={a++} title={data.title} content={data.content} delete={handleDelete}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
