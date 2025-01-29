import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  let commentlist = ["hello","aryan"];
  return (
    <div data-testid="myrootdiv">
      <CommentForm />
      <br/>
      <br/>
      <CommentList commentlist={commentlist} />
    </div>
  );
}

export default App;
