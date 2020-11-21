import React, { useRef, useState } from "react";
import Editable from "./Editable";

import "./App.css";

class App extends React.Component {
  // textareaRef = useRef();
  // const  inputRef = useRef();
  // [task, setTask] = useState("");
  // [description, setDescription] = useState("");


  state = {
    task: "",
    description: "",
    currentInput: null
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){

    return (
      <form>
          <h1>
            Inline Editable UI
          </h1>
        <div>
          <Editable
            text={this.state.task}
            type="input"
            placeholder="Write a task name"
            childRef="top"
          >
            <input
              ref="top"
              type="text"
              name="task"
              placeholder="Write a task name"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <h2>Child only shows up if Editable p tag is clicked on</h2>
          </Editable>
        </div>
        <div>
          <Editable
            text={this.state.description}
            placeholder="Description for the task"
            // childRef={textareaRef}
            type="textarea"
          >
            <textarea
              // ref={textareaRef}
              name="description"
              placeholder="Description for the task"
              rows="5"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Editable>
        </div>
      </form>
  );

  }

  
}

export default App;
