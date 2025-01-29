import { useState } from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const[comments,setComments] = useState([]);
  return (
    <div data-testid="myrootdiv">
      <CommentForm setComments={setComments} comments={comments} />
      <br/>
      <br/>
      <CommentList commentlist={comments}  />
    </div>
  );
}

export default App;
