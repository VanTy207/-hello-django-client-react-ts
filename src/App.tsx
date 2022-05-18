import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import  ListQuestionComponent from './modules/list_question/list_question';


function App() {
  return (
    <div className="App">
      <Header message='Nguyen Van Ty'/>
      <ListQuestionComponent/>
    </div>
  );
}

export default App;
