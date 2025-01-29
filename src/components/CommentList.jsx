import React from 'react'

const CommentList = ({commentlist}) => {
  return (
    <div>
        {
            commentlist?.length === 0 ? <h1 data-testid="empty">No Comments Found!</h1> : (
                <ul>
                    {
                        commentlist.map((comment)=>(
                            <li key={comment?.id}>{comment?.comment}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default CommentList;