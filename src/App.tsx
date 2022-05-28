import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from './routes';
import { Header } from './components/header/header';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header message='Nguyen Van Ty' />
        <AppRouter />
      </div>
    </Router>
  )
}