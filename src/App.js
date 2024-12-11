import React, {useState} from "react";
import './styles/App.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState('TEXT')

  return (
    <div className="App">
        <PostItem post={{id: 1, title: 'Golang', body: 'Description'}}/>
        <PostItem post={{id: 2, title: 'Python', body: 'Description'}}/>
        <PostItem post={{id: 3, title: 'JavaScript', body: 'Description'}}/>
    </div>
  );
}

export default App;
