import { useState } from 'react';
import {useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Hung Tran');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input 
            type="text"
            required
            value={titel}
            onChange={(e) => setTtitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        >
            <option value="Tran">Tran</option>
            <option value="Hung">Hung</option>
        </select>
      </form>
    </div>
  ); 
}

export default Create;
