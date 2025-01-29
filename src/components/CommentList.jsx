import React from 'react'

const CommentList = ({commentlist}) => {
  return (
    <div>
        {
            commentlist?.length === 0 ? <h1 data-testid="empty">"Not Comments Found!"</h1> : (
                <div>
                    {
                        commentlist.map((comment,index)=>(
                            <div key={index}>{comment}</div>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default CommentList;