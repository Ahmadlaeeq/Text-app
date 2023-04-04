import { useState } from "react";

function Listitem(){
    let marks=[40,39,60,75,20,60];
    let [result,setResult]=useState('')
    const getresult=(m)=>{
        if(m<40){
        setResult("Fail")
        }
        else{
        setResult("Pass")
        }
    };    
    const getcolor=(result)=>{
        if (result==="Fail"){
            return("text-danger")
        }
        else{
            return("text-success")
        }
    }
    return(
 <div className="container my-5">
    <ul className="list-group">
        {
            marks.map((m,i)=>
            <li
            onClick={()=>getresult(m)}
            className="list-group-item"
             key={i}
            >
            {m}</li>)
        }
    </ul>
    <p className={getcolor(result)}>{result}</p>
 </div>     
    )
}
export default Listitem;