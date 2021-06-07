import React, {useState} from 'react';
import Test from './components/Test';
import './App.css';
import TypeTest from './components/TypeTest';
import ZaehlerType from './components/ZaehlerButton'

export interface IState {
  person: {
    name: string
    age: number
    note?: string
  }[]
}

export type IZaehler = {
  zaehler: {
    number?: number
  }
}


function App() {

  const [zahl, setZahl] = useState<IZaehler["zaehler"]>({number : 0})

  const [person, setPerson] = useState<IState["person"]>([
    {
      name : 'Foo',
      age: 12,
      note: 'This is a Note'
    },
    {
      name: 'Bar',
      age: 17,
      note: 'This is another note'
    }
]);



  return (
    <div className="App">
      <div className='NameList'>
        <Test person = {person}/>
      </div>
      <div className='inputFieldStyle'>
        <TypeTest zaehler = {zahl}/>
        <ZaehlerType setZahl = {setZahl} zaehler = {zahl}/>
      </div>
    </div>
  );
}

export default App;
