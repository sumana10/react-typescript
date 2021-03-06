import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';


function App() {
  const personName = {
    first:'Sumana',
    last: 'Das'
  }
  const nameList = [
    {
        first: 'Bruce',
        last: 'Wayne'
    },
    {
        first: 'Clark',
        last: 'Kent'
    },
    {
        first: 'Princess',
        last: 'Diana'
    },
    
  ]
  return (
    <div className="App">
      <Greet name="Sumana" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
