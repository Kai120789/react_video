import React, {useState} from "react";
import './styles/App.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue] = useState('TEXT')

  return (
    <div className="App">
      <div className="post">
        <div className="post_content">
          <strong>1. Golang</strong>
          <div>
            Golang - тема
          </div>
        </div>
        <div className="post_btns">
          <button>delete</button>
        </div>
      </div>

      <div className="post">
        <div className="post_content">
          <strong>1. Golang</strong>
          <div>
            Golang - тема
          </div>
        </div>
        <div className="post_btns">
          <button>delete</button>
        </div>
      </div>

      <div className="post">
        <div className="post_content">
          <strong>1. Golang</strong>
          <div>
            Golang - тема
          </div>
        </div>
        <div className="post_btns">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
