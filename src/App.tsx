import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';
import db from "./db/db.json"
import { Tooltip } from './components/Tooltip/Tooltip';
import { ListItemProps } from './components/ListItem/ListItem';

function App() {
  const data: Array<ListItemProps> = db;
  console.log(data)
  return (
    <div className="App">
      <Input placeholder='Click to get suggestions'/>
       <Tooltip data={db} isOpen={false}/>
    </div>
  );
}

export default App;
