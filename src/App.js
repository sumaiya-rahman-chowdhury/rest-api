// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Input from './Component/Input';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
const [body, setBody] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data)
      }
      )
  }, [])
  const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
      method:'POST',
      body:JSON.stringify({
        title:title,
        body:body,
        userId:Math.random().toString(36).slice(2)
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((res=>res.json()))
    .then((data)=>{
      setPosts((posts)=>[data,...posts]);
      setTitle('');
      setBody('')
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
    console.log(title)
    console.log(body)
 }; 
  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        }
      </ul>
      
      <Input handleSubmit={handleSubmit} setTitle={setTitle} setBody={setBody} body={body} title={title}></Input>

    </div>
  );
}



export default App;
