import './App.css';
import Comment from './components/Comment'
import comments from './data/comments.json'



function App() {
  return (
    <div className="App">
      <div className="container-main">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp :</h1>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            country={comment.country}
            image={comment.image}
            post={comment.post}
            company={comment.company}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
