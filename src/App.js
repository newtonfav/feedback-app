function App() {
  const title = 'Blog Post';
  const body = 'My blog post about technology!';
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
    { id: 4, text: 'Comment four' },
  ];

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="comments">
        <h2>comments({comments.length})</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
