import React, {useState} from "react";
import './styles/App.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Golang', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'JavaScript', body: 'Description'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'С++', body: 'Description'},
    {id: 2, title: 'С#', body: 'Description'},
    {id: 3, title: 'Java', body: 'Description'}
  ])

  return (
    <div className="App">
        <PostList posts={posts} title='Список постов'/>
        <PostList posts={posts} title='Список постов2'/>
    </div>
  );
}

export default App;
