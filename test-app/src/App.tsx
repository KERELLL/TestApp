import React from 'react';
import './App.css';
import ParamEditor from './components/ParamEditor';
import { IModel, IParam } from './types/param-editor.types';


function App() {

  const params: IParam[] = [{
      id: 1,
      name: 'Назначение',
      type: 'text'
  },{
      id: 2,
      name: 'Длина',
      type: 'text'
  }];

  const model: IModel = {
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное'
      },
      {
        paramId: 2,
        value: 'макси'
      },
    ]
  }

  return (
    <div className="App">
        <ParamEditor  params={params} model={model}/>
    </div>
  );
}

export default App;
