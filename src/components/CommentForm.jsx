import React, { useState } from 'react'

const CommentForm = () => {

    const[text,setText] = useState("");
    const[ischeck,setIscheck] = useState(false);
 
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
            defaultChecked={ischeck}
            onClick={() => setIscheck(!ischeck)}
        />
        <br/>
        <button disabled={text === "" || !ischeck} >comment</button>
    </div>
  )
}

export default CommentForm;