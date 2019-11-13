import React from 'react';
import './App.css';
import Todos from './components/Todos'

 class  App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Meeting with boss',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        completed: false
      },
    ]
  }

  markComplete = (x, id) => {
    console.log(x, id)
  }

  render(){
    console.log(this.state.todos)

    return (
      <div className="App">
       <h1>hello</h1>
       <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
  }


export default App;
