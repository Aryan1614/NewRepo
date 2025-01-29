import React, { useState } from 'react'

const CommentForm = ({setComments,comments}) => {

    const[text,setText] = useState("");
    const[ischeck,setIscheck] = useState(false);

    const addComments = () => {
      if(text === ""){
        console.log("Comment Not Found!");
        return;
      }
      setComments((prev)=>[...prev,{id:comments.length+1,comment: text}]);
      setIscheck(false);
      setText("");
    }
 
  return (
    <div>
        <h1 data-testid="heading">Heading</h1>
        <br/>
        <input 
          type='text'
          placeholder='enter comment here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br/>
        <label htmlFor='check'>i agree to terms and conditions</label>
        <input 
            id='check'
            type='checkbox'
            checked={ischeck}
            onChange={() => setIscheck(!ischeck)}
        />
        <br/>
        <button disabled={text === "" || !ischeck} onClick={addComments}>comment</button>
    </div>
  )
}

export default CommentForm;